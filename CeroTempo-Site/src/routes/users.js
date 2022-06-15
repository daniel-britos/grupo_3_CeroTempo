var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/userValidations');
const upload = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');
<<<<<<< HEAD
const inSession = require('../middlewares/inSession');
=======
const notLogin = require('../middlewares/notLogin');
>>>>>>> c737312ff39579822a7088a66d1c6ca8ef7528aa

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, logout, profile} = require('../controllers/usersController');


<<<<<<< HEAD
router.get('/register', inSession, register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', inSession, login)
=======
router.get('/register', notLogin, register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', notLogin, login)
>>>>>>> c737312ff39579822a7088a66d1c6ca8ef7528aa
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout)
      .get('/profile', profile);


module.exports = router;