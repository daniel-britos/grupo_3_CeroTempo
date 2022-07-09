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
				return res.render('list', {products})
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
                if (req.files.length > 0) {              //1. preguntamos si viene una imagen por file
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
		db.Product.update(
			{
                name: name,
                price: +price,
                discount: +discount,
                detail: detail.trim(),
                characteristics: characteristics.trim().split(',').toString(), 
                categoryId : category,
			},
			{
				where : {
					id : req.params.id
				}
			}
		).then(async () => {
			if(req.file){
				try {
					await db.Image.update(
						{
							file : req.file.filename
						},
						{
							where : {
								productId : req.params.id
							}
						}
					)
				} catch (error) {
					console.log(error);
				}
			}
			return res.redirect('/products/productMain');

		}).catch(error => console.log(error))
},
    remove: (req, res) => {
        db.Product.destroy({
            where : {
                id : req.params.id
            }
        })
        .then((info) => {
            return res.redirect('/')
        })
        .catch(error => console.log(error))

    },
}