const { validationResult } = require("express-validator");
const fs = require('fs');
const path = require('path');
const db = require('../database/models'); 

const toThousand = n => n.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
module.exports = {
    panel: (req, res) => {
        return res.render('panel');
    },
    list: (req, res) => {
		db.Product.findAll({
			include : ['images']
		})
			.then(products => {
                //return res.send(products)
				return res.render('list',{products})
			})
			.catch(error => console.log(error))
      },
    create: (req, res) => {
        db.Category.findAll()
        .then(categories => {
            return res.render('create',{
                categories
            })
        })
        .catch(error => console.log(error))	
    },
    edit: (req, res) => {
        let product = db.Product.findByPk(req.params.id,{
		    include : ['images']
		})
		let categories = db.Category.findAll()
		Promise.all([product,categories])
			.then(([product,categories]) => {
				return res.render('edit',{
					product,
					categories
				})
			})
			.catch(error => console.log(error))	
        },
        
        store: (req, res) => {    
            let { name, price, discount, detail, characteristics, category } = req.body;
            db.Product.create({
                //cargo todo lo que viene por body
                name: name,
                price: +price,
                discount: +discount,
                detail: detail.trim(),
                characteristics: characteristics.trim().split(',').toString(), 
                categoryId : category,
            }).then(product => {
                if (req.files.length > 0) {              
                    let images = req.files.map(({filename},i) => {       
                        let image = {       
                            name : filename,   
                            productId : product.id,
                        }
                        return image
                    })
                    db.Image.bulkCreate(images,{validate : true})
                        .then((result) => console.log(result))
                }
                return res.redirect('/')
            })
            .catch(error => console.log(error))	 
    },
    update: (req, res) => {
        let { name, price, discount, detail, characteristics, category } = req.body;
        let arrayImages = [];
        if (req.files) {
            req.files.forEach((image) => {
                arrayImages.push(image.filename);
            });
        }
        db.Product.update(
        {
            name: name.trim(),
            price: +price,
            discount: +discount,
            categoryid: category,
            description: detail.trim(),
            characteristics,
        },
        {
            where: {
                id: req.params.id,
            },
        }
        ).then((result) => {
            if (result) {
                if (arrayImages.length > 0) {
                let images = arrayImages.map((image) => {
                    return {
                        name: image,
                        productId: req.params.id,
                    };
                });                
                db.Image.findAll({
                    where: {
                    productId: req.params.id,
                    },
                }).then((result) => {
                    result.forEach((image) => {
                        fs.existsSync("../public/images/instruments/", image.name)
                        ? fs.unlinkSync("../public/images/instruments/" + image.name)
                        : console.log("-- No se encontró");
                    });
                    db.Image.destroy({
                            where: {
                            productId: req.params.id,
                        },
                    }).then(
                    db.Image.bulkCreate(images).then(
                        res.redirect("/products/productMain")
                    ))
                });
            }
            return res.redirect("/products/productMain");
            }
        });
          
},
    remove: (req, res) => {   
		db.Image.findAll({
			where : {
				productId : req.params.id
			}
		}).then(images => {
            images.forEach(image => {
                if(fs.existsSync(path.resolve(__dirname,'../../public/images/instruments/' + image.name))){
                    console.log(image.file)
                    fs.unlinkSync(path.resolve(__dirname,'../../public/images/instruments/' + image.name))
                }
            })
        })

        
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        }).then((info) => {
            return res.redirect('/')
        }).catch(error => console.log(error))

    }          
}