var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const registerValidator = require('../validations/userValidations');
const upload = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');
const inSession = require('../middlewares/inSession');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, logout} = require('../controllers/usersController');


router.get('/register', inSession, register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', inSession, login)
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout);

module.exports = router;