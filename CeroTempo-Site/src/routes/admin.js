var express = require('express');
var router = express.Router();
const multer = require('multer');

const  {panel, create, store, edit} = require('../controllers/adminController');

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, 'public/images/instrumentos');          //ubicación de las imagenes
    },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}_products_${path.extname(file.originalname)}`); //cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); 
    }
})
const upload = multer({
    storage
})


router.get('/panel', panel);
router.get('/create', create);
router.post('/create', store);
router.get('/edit', edit);

module.exports = router;