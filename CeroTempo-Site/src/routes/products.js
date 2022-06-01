var express = require('express');
var router = express.Router();

const {pCart, pDetail, pMain, pSearch} = require('../controllers/productController');


router.get('/productMain', pMain);
router.get('/productCart', pCart);
router.get('/productDetail/:id', pDetail);
router.get("/search", pSearch);


module.exports = router;