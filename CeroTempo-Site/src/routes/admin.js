var express = require('express');
var router = express.Router();
const productValidation = require('../validations/productValidation'); 
const upload = require('../middlewares/uploadImagesProducts');
const adminCheck = require('../middlewares/adminCheck');




const  {panel, create, edit, update, store, remove, list} = require('../controllers/adminController');

router
    .get('/panel', adminCheck, panel)
    .get('/create', adminCheck, create)
    .post('/create', upload.array('image'), productValidation, store)
    .get('/edit/:id', adminCheck,edit)
    .put('/update/:id', upload.array('image'), productValidation, update)
    .delete('/remove/:id', remove)
    .get('/list',adminCheck, list)

        


module.exports = router;