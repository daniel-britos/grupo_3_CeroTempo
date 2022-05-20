const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');

const readProduct = () => {  
	const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8')); 
    return products
}
const saveProducts = (products) => fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 3))

module.exports = {
    panel : (req, res) => {
        return res.render('admin/panel');
    },
    create : (req, res) => {
        return res.render('admin/create');
    },
    store : (req, res) =>{
        let products = readProduct()
        const { name, price, discount, category, detail, characteristics, image} = req.body;
        let oProducts = {
            id: products[products.length - 1].id + 1,
            name: name.trim(),
            price: +price,
            discount: +discount,
            category : category,
            detail: detail.trim(),
            characteristics: characteristics.trim(),
            image : "default-image.png"         
        }
        products.push(oProducts);
        saveProducts(products);
        return res.redirect('create');
    },
    edit : (req, res) => {
        return res.render('admin/edit');
    }
}