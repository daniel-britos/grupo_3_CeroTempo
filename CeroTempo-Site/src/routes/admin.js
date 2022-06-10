var express = require('express');
var router = express.Router();

const path = require('path');
const multer = require('multer');

const storage= multer.diskStorage({
    destination:(req,file,callback)=>{
    callback(null,'./public/images/instruments') //--------------------LE AGREGUE DOS PUNTITOS
}, 
filename: (req,file, callback)=>{
    callback(null, file.fieldname+'-'+ Date.now()+ path.extname(file.originalname))
}
});

const upload= multer({storage}); 

const  {panel, create, edit, update, store, remove} = require('../controllers/adminController');


router.get('/panel', panel);
router.get('/create', create);
router.post('/create', upload.single('image'), store);
router.get('/edit/:id', edit);
router.put('/update/:id', upload.array('image'), update);
router.delete('/remove/:id', remove);

module.exports = router;