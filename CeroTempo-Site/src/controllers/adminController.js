const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
// const products = require("../data/productsDataBase.json");
const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const readProduct = () => {  
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
    return products
};
const saveProducts = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products,null,3));

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    panel: (req, res) => {
        return res.render('panel');
    },
    list: (req, res) => {
        const products = readProduct()
        return res.render("list", {
          products,
          toThousand
        });
      },
    create: (req, res) => {
        return res.render('create');
    },
    edit: (req, res) => {
		let products = readProduct();
		let product = products.find(product => product.id === +req.params.id);
		return res.render('edit',{
			product
		})
	},

    store: (req, res) => {
        let products = readProduct();
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let { name, price, discount, category, detail} = req.body;
            let lastID = products[products.length - 1].id;
            let images = req.files.map((image) => image.filename);
            let characteristicsArray = JSON.stringify(req.body.characteristics)
            let newProduct = {
                id: +lastID + 1,
                name: name.trim(),
                price: +price,
                discount: +discount,
                category: category,
                detail: detail.trim(),
                characteristics: characteristicsArray.trim().split(','),
                img: images.length > 0 ? images : ['default-image.png']
            };
            products.push(newProduct);
            saveProducts(products)
              return res.redirect('/');
        }else{
        console.log(errors.mapped());
        return res.render("create", {
        errors: errors.mapped(),
        old: req.body,
      });
    }        
    },
    update: (req, res) => {
        let products = readProduct();
        let errors = validationResult(req);
        if (errors.isEmpty()){

            const{id} = req.params;
            const { name, price, discount, category, detail, 
                characteristics} = req.body;
        
        const productsModify = products.map(product => {
            if(product.id === +id){
                let productModify = {
                    ...product,
                    name: name.trim(),
                    price: +price,
                    discount: +discount,
                    category: category,
                    detail: detail.trim(),
                    characteristics: characteristics.trim(),
                    img: req.file ? req.file.filename : product.img,
                };
                if(req.file){
                    if(
                        fs.existsSync(
                            path.resolve(__dirname,  "..", "public", "images", "instruments", product.img)
                          ) &&
                          product.img !== "default-image.png"
                    ){
                        fs.unlinkSync(
                            path.resolve(__dirname,  "..", "public", "images", "instruments", product.img)
                          ); 
                    }
                }
                return productModify;
            }
            return product;
            
        });
        saveProducts(productsModify)
        return res.redirect('/products/productMain');
    }else{
        console.log(errors);
        return res.render("create", {
            product : req.body,
            errors : errors.mapped()
        });
    }
},
    remove: (req, res) => {
        let products = readProduct();
		const productsModify = products.filter(product => product.id !== +req.params.id)
		saveProducts(productsModify);
		return res.redirect('/admin/list');
    }
}