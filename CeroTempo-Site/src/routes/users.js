var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const registerValidator = require('../validations/userValidations');
const upload = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, } = require('../controllers/usersController');


router.get('/register', register)
      .post('/register', upload.single('avatar'), registerValidator, processRegister)
      .get('/login', login)
      .post('/login', loginValidator, processLogin);

module.exports = router;