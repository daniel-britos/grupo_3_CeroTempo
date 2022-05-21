var express = require('express');
var router = express.Router();


const  {panel, create, store, edit, update} = require('../controllers/adminController');



router.get('/panel', panel);
router.get('/create', create);
router.post('/create', store);

router.get('/edit/:id', edit);
router.put('/update/:id', update);

module.exports = router;