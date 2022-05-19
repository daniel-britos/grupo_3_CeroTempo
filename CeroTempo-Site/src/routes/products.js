var express = require('express');
var router = express.Router();

const {pCart, pDetail, pMain} = require('../controllers/productController');

router.get('/productMain', pMain);
router.get('/productCart', pCart);
router.get('/productDetail/:id', pDetail);

module.exports = router;