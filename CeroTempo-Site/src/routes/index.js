var express = require('express');
var router = express.Router();

const  {index, courses, luthiers, panel, create, edit} = require('../controllers/mainController');

/* GET home page. */
router.get('/', index);
router.get('/courses', courses);
router.get('/luthiers', luthiers);

module.exports = router;