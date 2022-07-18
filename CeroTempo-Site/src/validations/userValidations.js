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


    check('userEmail') //se agrego el check.userEmail, se dividió en check y body
    .notEmpty().withMessage('This field is require').bail()
    .isEmail().withMessage('Invalid...'),

    body('userEmail')
        .custom(value => {
           return db.User.findOne({
            where: {
                userEmail: value
            }
           }).then(user => {
            // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>', user);
            if(user){
                // return Promise.reject('Este mail esta registrado')
                return Promise.reject('Email alaready register.') //se agrego mensaje
            }
        // }).catch(error => console.log(error))
    })
    // .catch(() => Promise.reject('Este email ya se encuentra registrado!')) //---se comentó.
    }),

    check('userPass')
<<<<<<< HEAD
        .isLength({min: 6, max:16}).withMessage('The field must contain at least 6 and 12 letters').bail(),
=======
    .notEmpty().withMessage('Enter password').bail()    //se agrego notEmpty
    .isLength({min: 6, max:12}).withMessage('The field must contain at least 6 and 12 letters').bail(),
>>>>>>> userlist

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
