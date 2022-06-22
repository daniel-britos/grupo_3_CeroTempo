var express = require('express');
var router = express.Router();
const registerValidator = require('../validations/userValidations');
const uploadImagesAvatar = require('../middlewares/uploadImagesAvatar');
const loginValidator = require('../validations/loginValidation');
const updateProfileValidator = require('../validations/updateProfileValidation');
const inSession = require('../middlewares/inSession');
const profileCheck = require('../middlewares/profileCheck');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


const {register, login, processRegister, processLogin, logout, profile, updateProfile, processUpdateProfile} = require('../controllers/usersController');


router.get('/register', inSession, register)
      .post('/register', uploadImagesAvatar.single('avatar'), registerValidator, processRegister)
      .get('/login', inSession, login)
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout)
      .get('/profile', profileCheck, profile)
      .get('/update',updateProfile)
      .put('/update-profile',uploadImagesAvatar.single('avatar'), updateProfileValidator,processUpdateProfile);


module.exports = router;