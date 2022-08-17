const { check } = require('express-validator')

module.exports = [
    check('name')
        .notEmpty().withMessage("Enter category's name").bail()
        .isLength({
            min: 3
        }).withMessage('Enter at least 3 characters').bail()
]