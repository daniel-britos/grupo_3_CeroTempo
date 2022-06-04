const { validationResult } = require("express-validator");
const fs = require("fs");
const bcryptjs = require('bcryptjs');
const path = require("path");
const users = require('../data/userDataBase.json');

const usersFilePath = path.join(__dirname, '../data/userDataBase.json');

const readUsers = () => {  
	const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 
    return users
}

module.exports = {
    register: (req, res) => {
      const readUser = readUsers();
      return res.render('register');
    },
    login: (req, res) => {
        return res.render('login');
    },
    processRegister: (req, res) => {
        let errors = validationResult(req); 

        if (errors.isEmpty()) {    
          let { userName, userSurname, userPass, userBirth, userEmail } = req.body;
          let lastID = users.length !== 0 ? users[users.length - 1].id : 0;
          let newUser = {
            id: +lastID + 1,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail,
            userPass: bcryptjs.hashSync(userPass.trim(), 10),
            userBirth,
            avatar: req.file ? req.file.filename : "default-image-avatar.png"
          };
    
          users.push(newUser);
    
          fs.writeFileSync(
            path.resolve(__dirname, "..", "data", "userDataBase.json"),
            JSON.stringify(users, null, 3),
            "utf-8"
          );
        return res.redirect("/");
    
        }else{            
            return res.render("register",{
                errores : errors.mapped(),   
                old : req.body   
            });
        }
    },

  login: (req, res) => {
    return res.render("login");
  },

  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { id, userName, rol } = users.find(
        user => user.userEmail === req.body.userEmail
      );
      req.session.userLogin = {
        id,
        userName,
        rol,
      };
      if (req.body.remember) {
        res.cookie("CeroTempo", req.session.userLogin, {
          maxAge: 1000 * 60 * 2})
      }

      res.redirect("/");

    } else {
      return res.render("login", {
        errores: errors.mapped(),
        old: req.body
      });
    }
  },
  logout : (req,res) => {
    req.session.destroy();
    res.cookie('userCeroTempo',null,{maxAge : -1})
    return res.redirect('/')
  }

};
