const db = require('../database/models');
const {Op} = require('sequelize');

module.exports = {
    //http://localhost:3000/products/productMain
    pMain : (req, res) => {
        db.Product.findAll({
			include : ['images']
		})
			.then(products => {
				return res.render('productMain',{
					products
				})
			})
			.catch(error => console.log(error))
    },
    pCart : (req, res) => {
        res.render('productCart');
    },
    pDetail : (req, res) => {
        db.Product.findByPk(req.params.id,{
			include : ['images']
		})
			.then(product => {
				return res.render('productDetail',{
					product
				})
			})
			.catch(error => console.log(error))
    },
    pSearch: (req, res) => {
        
        const {keywords} = req.query;

		db.Product.findAll({
			where : {
				[Op.or] : [
					{
						name : {
							[Op.substring] : keywords
						}
					},
					{
						description : {
							[Op.substring] : keywords
						}
					}
				]
			},
			include : ['images']
		}).then(products => {
            
			return res.render('search',{
				products,
				keywords,
			})
		}).catch(error => console.log(error))
    }
}