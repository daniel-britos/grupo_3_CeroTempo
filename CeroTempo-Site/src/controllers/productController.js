const fs = require('fs');
const path = require('path');
const db = require('../database/models'); 

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const readProduct = () => {  
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
    return products
}
module.exports = {
    //http://localhost:3000/products/productMain
    pMain : (req, res) => {
        const products = readProduct()
        res.render('productMain', {
            products,
        });
    },
    pCart : (req, res) => {
        res.render('productCart');
    },
    pDetail : (req, res) => {
        const products = readProduct()
        const {id} = req.params;
        const product = products.find(product => product.id === +id);
        res.render('productDetail', {
            product,
            products
        });
    },
    pSearch: (req, res) => {
        const products = readProduct();
        const { keyword } = req.query;
        const result = products.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase()));
        res.render("search", {
        products: result,
        keyword,
    });
  }
}
