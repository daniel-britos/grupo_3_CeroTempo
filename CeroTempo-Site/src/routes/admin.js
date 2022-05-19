var express = require('express');
var router = express.Router();

const  {panel, create, store, edit} = require('../controllers/adminController');


router.get('/panel', panel);
router.get('/create', create);
router.post('/create', store);
router.get('/edit', edit);

module.exports = router;