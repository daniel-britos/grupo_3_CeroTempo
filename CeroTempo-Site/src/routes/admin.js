var express = require('express');
var router = express.Router();
const productValidation = require('../validations/productValidation'); 
const upload = require('../middlewares/uploadImagesProducts');



const  {panel, create, edit, update, store, remove, list} = require('../controllers/adminController');

router
    .get('/panel', panel)
    .get('/create', create)
    .post('/create', upload.array('image'), productValidation, store)
    .get('/edit/:id', edit)
    .put('/update/:id', upload.single('image'),productValidation, update)
    .delete('/remove/:id', remove)
    .get('/list', list)

module.exports = router;