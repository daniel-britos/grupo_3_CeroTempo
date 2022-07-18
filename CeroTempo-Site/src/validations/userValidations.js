const {check, body} = require('express-validator');
// const users = require('../data/userDataBase.json')
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

    check('userEmail')
        .notEmpty().withMessage('This field is required').bail()
        .isEmail().withMessage('Invalid..').bail()
        .custom(value => {
           return db.User.findOne({
            where: {
                userEmail: value
            }
           }).then(user => {
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', user);
            if(user){
                // return Promise.reject('Este mail esta registrado')
                return Promise.reject()
            }
        // }).catch(error => console.log(error))
    }).catch(() => Promise.reject('Este email ya se encuentra registrado!'))
    }),

    check('userPass')
        .isLength({min: 6, max:16}).withMessage('The field must contain at least 6 and 12 letters').bail(),

    body('userPassConfirm')
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
