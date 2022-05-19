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
        res.render('products/productDetail');
    }
}