const res = require('express/lib/response')
const products = require('../data/productsDataBase.json');

module.exports = {
    pMain : (req, res) => {
        res.render('products/productMain', {
            products
        });
    },
    pCart : (req, res) => {
        res.render('products/productCart');
    },
    pDetail : (req, res) => {
        const {id} = req.params;
        const product = products.find(product => product.id === +id);
        res.render('products/productDetail', {product
        });
    }
}
