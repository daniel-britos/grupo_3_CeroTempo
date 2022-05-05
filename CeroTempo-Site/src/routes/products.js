var express = require('express');
var router = express.Router();

const {pCart, pDetail} = require('../controllers/productController');

router.get('/productCart', pCart);
router.get('/productDetail', pDetail);


module.exports = router;