const { validationResult } = require("express-validator");
const fs = require("fs");
const path = require("path");
const usuarios = require('../data/userDataBase.json');

module.exports = {
    register: (req, res) => {
        return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
    processRegister: (req, res) => {
        let errors = validationResult(req); 

        if (errors.isEmpty()) {    
          let { userName, userSurname } = req.body;
          let lastID = usuarios.length !== 0 ? usuarios[usuarios.length - 1].id : 0;
          let nuevoUsuario = {
            id: +lastID + 1,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail,
            userPass: userPass.trim(),
            userBirth,
            avatar: req.file ? req.file.filename : "default-image-avatar.png"
          };
    
          usuarios.push(nuevoUsuario);
    
          fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "userDataBase.json"),
            JSON.stringify(usuarios, null, 3),
            "utf-8"
          );
        return res.redirect("/");
    
        }else{            
            return res.render("register",{
                errores : errors.mapped(),   
                old : req.body   
            });
        }
    }
}