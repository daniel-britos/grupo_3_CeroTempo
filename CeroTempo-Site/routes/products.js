var express = require('express');
var router = express.Router();


router.get('/productCart', function(req, res){
    res.render('productCart');
  });


router.get('/productDetail', function(req, res){
  res.render('productDetail');
});

  module.exports = router;