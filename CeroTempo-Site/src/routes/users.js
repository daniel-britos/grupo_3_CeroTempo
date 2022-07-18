var express = require('express');
var router = express.Router();
/*validations*/
const registerValidator = require('../validations/userValidations');
const loginValidator = require('../validations/loginValidation');
const updateProfileValidator = require('../validations/updateProfileValidation');
/*middlewares*/
const uploadImagesAvatar = require('../middlewares/uploadImagesAvatar');
const inSession = require('../middlewares/inSession');
const profileCheck= require('../middlewares/profileCheck');
const adminCheck = require('../middlewares/adminCheck');
/*controller*/
const {userList, register, login, processRegister, processLogin, logout, profile, updateProfile, processUpdateProfile} = require('../controllers/usersController');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*routes*/
router.get('/register', inSession, register)
      .post('/register', uploadImagesAvatar.single('avatar'), registerValidator, processRegister)
      .get('/login', inSession, login)
      .post('/login', loginValidator, processLogin)
      .get('/logout', logout)
      .get('/profile',profileCheck, profile)
      .get('/update',profileCheck, updateProfile)
      .put('/update-profile',uploadImagesAvatar.single('avatar'), updateProfileValidator,processUpdateProfile)
      .get('/userList', userList)

module.exports = router;