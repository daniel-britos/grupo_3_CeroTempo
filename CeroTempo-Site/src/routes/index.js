var express = require('express');
var router = express.Router();

<<<<<<< HEAD
const {index, courses, luthiers, create, edit} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
router.get('/create', create);
router.get('/edit', edit);
=======
const {index, courses, luthiers} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
>>>>>>> productCart-fernando
router.get('/courses', courses);
router.get('/luthiers', luthiers);

module.exports = router;
