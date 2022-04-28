var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/courses', function(req, res){
  res.render('courses');
});


router.get('/luthiers', function(req, res){
  res.render('luthiers');
});

module.exports = router;
