const {check, body} = require('express-validator');
const db = require('../database/models')

module.exports = [
    check('userName')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...'),

    check('userSurname')
        .notEmpty().withMessage('This field is required').bail()
        .isLength({min: 2}).withMessage('The field must contain at least two letters').bail()
        .isAlpha().withMessage('Enter your name...'),
    
    body("userEmail")
        .notEmpty().withMessage('This field is require').bail()
        .isEmail().withMessage('Invalid...')
        .custom(value => {
           return db.User.findOne({
            where: {
                userEmail: value
            }
           }).then(user => {
            if(user){                
                return Promise.reject('Email alaready register.') //se agrego mensaje
            }
        // }).catch(error => console.log(error))
    })
    // .catch(() => Promise.reject('Este email ya se encuentra registrado!')) //---se comentó.
    }),

    check('userPass')
    .notEmpty().withMessage('Enter password').bail()    //se agrego notEmpty
    .isLength({min: 8, max:12}).withMessage('The field must contain at least 8 letters').bail()
    .isAlpha().withMessage("the password must be alphanumeric"),

    body('userPassConfirm')
        .notEmpty().withMessage('You must confirm password').bail()
        .custom((value,{req}) => {
            if(value !== req.body.userPass){
                return false
            }
            return true
        }).withMessage("The passwords don't match"),

        
    check('terms')
        .isString('on')
        .withMessage('You must agree to terms and conditions.')
]