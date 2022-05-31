const {check, body} = require('express-validator');
const usuarios = require('../data/userDataBase.json')

module.exports = [
    check('userName')
        .isLength({min: 2}).withMessage('El nombre debe contener al menos 2 letras').bail()
        .isAlpha().withMessage('Introduzca un nombre..'),
    check('userSurname')
        .isLength({min: 2}).withMessage('El nombre debe contener al menos 2 letras').bail()
        .isAlpha().withMessage('Introduzca un apellido..'),
    check('userEmail')
        .notEmpty().withMessage('Debes ingresar tu email').bail()
        .isAlpha().withMessage('Introduzca un e-mail'),
    check('userPass')
        .isLength({min: 2}).withMessage('Como mínimo dos letras').bail()
        .isAlpha().withMessage('Introduzca un password'),
        
]
