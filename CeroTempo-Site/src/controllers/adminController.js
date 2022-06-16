const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
const products = require("../data/productsDataBase.json");

module.exports = {
    panel: (req, res) => {
        return res.render('panel');
    },


    create: (req, res) => {
        return res.render('create');
    },


    store: (req, res) => {
        let errors = validationResult(req);
        if(errors.isEmpty()){
            let { name, price, discount, category, detail, characteristics } = req.body;
            let lastID = products[products.length - 1].id;
            let images = req.files.map((image) => image.filename);
            let newProduct = {
                id: +lastID + 1,
                name: name.trim(),
                price: +price,
                discount: +discount,
                category: category,
                detail: detail.trim(),
                characteristics: characteristics.trim(),
                img: images.length > 0 ? images : ['default-image.png']
            };
            products.push(newProduct);

            fs.writeFileSync(
                path.resolve(__dirname, "..", "data", "productsDataBase.json"),
                JSON.stringify(products, null, 3),
                "utf-8"
              );
              return res.redirect('/');
        }else{
        console.log(errors.mapped());
        return res.render("create", {
        errors: errors.mapped(),
        old: req.body,
      });
    }        
    },

    edit: (req, res) => {
        const {id} = req.params;
        let product = products.find(
        (product) => product.id === +id);
        return res.render('edit', {
            product,
        });
    },
    update: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            const{id} = req.params;
            const { name, price, discount, category, detail, 
                characteristics} = req.body;
        
        const productsModify = products.map(
            (product) => {
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
                            path.resolve(__dirname, "..", "..", "public", "images", "instruments", product.img)
                          ) &&
                          product.img !== "default-image.png"
                    ){
                        fs.unlinkSync(
                            path.resolve(__dirname, "..", "..", "public", "images", "instruments", product.img)
                          ); 
                    }
                }
                return productModify;
            }
            return product;
            
        });
        fs.writeFileSync(
        path.resolve(__dirname, "..", "data", "productsDataBase.json"),
        JSON.stringify(productsModify, null, 3),
        "utf-8"
        );
        return res.redirect('productMain');
    }else{
        console.log(errors);
        return res.render("create", {
            product : req.body,
            errors : errors.mapped()
        });
    }
},

    remove: (req, res) => {
        const { id } = req.params;
        const productFilter= products.filter((product) => product.id !== +id);
        fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "productsDataBase.json"),
            JSON.stringify(productFilter, null, 3),
            "utf-8"
          );
        return res.redirect('productMain');
    },
}