var express = require('express');
var router = express.Router();

<<<<<<< HEAD
<<<<<<< HEAD

const {index, courses, luthiers, panel, create, edit} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
router.get('/panel', panel);
=======
const {index, courses, luthiers, create, edit} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
>>>>>>> login-maria
router.get('/create', create);
router.get('/edit', edit);
=======
const {index, courses, luthiers} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
<<<<<<< HEAD
>>>>>>> register-maria
=======
>>>>>>> productCart-fernando
>>>>>>> login-maria
router.get('/courses', courses);
router.get('/luthiers', luthiers);

module.exports = router;
