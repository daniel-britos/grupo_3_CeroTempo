module.exports = {
    panel: (req, res) => {
        return res.render('admin/panel');
    },
    create: (req, res) => {
        return res.render('admin/create');
    },
    store: (req, res) => {
        let products = readProduct()
        const { name, price, discount, category, detail, characteristics, image } = req.body;
        let oProducts = {
            id: products[products.length - 1].id + 1,
            name: name.trim(),
            price: +price,
            discount: +discount,
            category: category,
            detail: detail.trim(),
            characteristics: characteristics.trim(),
            default: req.file ? req.file.filename : 'default-image.png' ,
        }
        products.push(oProducts);
        saveProducts(products);
        return res.redirect('create');
    },
    edit: (req, res) => {
        let products = readProduct()
        let product = products.find(product => product.id === +req.params.id);
        return res.render('edit', {
            product
        });
    },
    update: (req, res) => {
        let products = readProduct();
        const { name, price, discount, category, detail, characteristics, image } = req.body;
        const product = products.find(product => product.id === +req.params.id);
        const updateProducts = products.map(product => {
            if (product.id === +req.params.id) {
                let updateProduct = {
                    ...product,
                    name: name.trim(),
                    price: +price,
                    discount: +discount,
                    category: category,
                    detail: detail.trim(),
                    characteristics: characteristics.trim(),
                    image: "default-image.png"
                }
                return updateProduct;
            }
            return product;
        })
        saveProducts(updateProducts);
        return res.redirect('productMain');
    },
    remove: (req, res) => {
        let products = readProduct();
        //leo lo sproductos
        const productsModify = products.filter(product => product.id !== +req.params.id);
        // traigo todos los que son distintos al id que ingresa por parametro
        saveProducts(productsModify);
        return res.redirect('productMain');
    }
}
