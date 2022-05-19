const products = require('../data/productsDataBase.json'); 
module.exports = {
    pMain : (req, res) => {
        res.render('products/productMain');
    },
    pCart : (req, res) => {
        res.render('products/productCart');
    },
    pDetail : (req, res) => {
        res.render('products/productDetail');
    }
}