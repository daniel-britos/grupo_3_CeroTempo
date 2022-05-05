var express = require('express');
var router = express.Router();

const {index, courses, luthiers, create} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
router.get('/create', create);
router.get('/courses', courses);
router.get('/luthiers', luthiers);

module.exports = router;
