const {check} = require('express-validator');

module.exports = [

    check('name')
        .notEmpty().withMessage("Enter product's name")
        .isLength({min:3,max:20}).withMessage('At least 3 characters').bail(),
    
    check('price')
        .notEmpty()
        .withMessage("Enter product's price").bail(),

    check('discount')
        .notEmpty()
        .withMessage("Enter product's discount").bail(),

    check('detail')
        .notEmpty()
        .withMessage("Enter product's description").bail(),

    check('characteristics')
        .notEmpty()
        .withMessage("Enter characteristics").bail(),

    check('category')
        .notEmpty()
        .withMessage("Enter a category").bail(),

]