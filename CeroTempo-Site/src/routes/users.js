var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/userValidations');
const upload = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');
const notLogin = require('../middlewares/notLogin');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, logout, profile} = require('../controllers/usersController');


router.get('/register', notLogin, register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', notLogin, login)
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout)
      .get('/profile', profile);


module.exports = router;