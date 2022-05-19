var express = require('express');
var router = express.Router();

const  {panel, create, edit} = require('../controllers/adminController');


router.get('/panel', panel);
router.get('/create', create);
router.get('/edit', edit);

module.exports = router;