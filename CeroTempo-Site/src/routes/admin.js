var express = require('express');
var router = express.Router();

const { create } = require('../controllers/adminController');



router.get('/create', create);

//http://localhost:3000/create

module.exports = router;