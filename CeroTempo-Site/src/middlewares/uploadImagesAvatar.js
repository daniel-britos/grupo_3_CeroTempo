const multer = require('multer');
const path = require('path');


const storage = multer.diskStorage({
    destination: (req,res,cb) => {
      cb(null, './public/images/users');
    },
    filename: (req, file, cb) => {
      let filename = `${Date.now()}_img${path.extname(file.originalname)}`
      cb(null, filename);
    }
  })
  const uploadFile = multer({storage});

  module.exports = uploadFile;