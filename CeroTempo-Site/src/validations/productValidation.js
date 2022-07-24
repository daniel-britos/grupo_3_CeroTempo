const {check} = require('express-validator');

module.exports = [
    check('name')
        .notEmpty().withMessage("Enter product's name")
        .isLength({min:5,max:20}).withMessage('At least 3 characters').bail(),
    
    check('price')
        .notEmpty()
        .withMessage("Enter product's price").bail(),

    check('discount')
        .notEmpty()
        .withMessage("Enter product's discount").bail(),

    check('detail') //cambiar por description?
        .notEmpty()
        .withMessage("Enter product's description").bail()
        .isLength({min:20}).withMessage('At least 3 characters').bail(),

    check('category')
        .notEmpty()
        .withMessage("Enter a category").bail(),

]