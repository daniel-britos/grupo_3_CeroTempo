var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/userValidations');
const upload = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');
const inSession = require('../middlewares/inSession');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, logout, profile} = require('../controllers/usersController');


router.get('/register', inSession, register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', inSession, login)
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout)
      .get('/profile', profile);


module.exports = router;