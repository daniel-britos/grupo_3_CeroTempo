const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const readProduct = () => {  
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
    return products
}

module.exports = {
    pMain : (req, res) => {
        const listProduct = readProduct()
        res.render('productMain', {
            listProduct
        });
    },
    pCart : (req, res) => {
        res.render('productCart');
    },
    pDetail : (req, res) => {
        const listProduct = readProduct()
        const {id} = req.params;
        const product = listProduct.find(product => product.id === +id);
        res.render('productDetail', {
            product
        });
    }
}
