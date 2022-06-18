const {check, body} = require('express-validator');
const users = require('../data/userDataBase.json')

module.exports = [
    check('userName')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...'),

    check('userSurname')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...')
]
