const fs = require('fs');
const path = require('path');


const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const readProduct = () => {  
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
    return products
}
module.exports = {
    index : (req, res) => {
        const listProduct = readProduct()
        res.render('index', {
            listProduct
        });
    },
    courses : (req, res) => {
        return res.render('courses');
    },
    luthiers : (req, res) => {
        return res.render('luthiers');
    }
}