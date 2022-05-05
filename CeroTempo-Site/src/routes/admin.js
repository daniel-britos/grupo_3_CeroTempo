var express = require('express');
var router = express.Router();

const { create } = require('../controllers/adminController');

router.get('/create', create);


module.exports = router;