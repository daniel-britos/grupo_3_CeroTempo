const { validationResult } = require("express-validator");
const fs = require("fs");
const bcryptjs = require('bcryptjs');
const path = require("path");
const users = require('../data/userDataBase.json');
const db = require("../database/models");

// const usersFilePath = path.join(__dirname, '../data/userDataBase.json');

// const readUsers = () => {  
// 	const users = JSON.parse(fs.readFileSync(usersFilePath, 'utf-8')); 
//     return users
// }

module.exports = {
    register: (req, res) => {
      // const readUser = readUsers();
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
          db.User.create({
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail : userEmail.trim(),
            userPass: bcryptjs.hashSync(userPass.trim(), 10),
            userBirth,
            avatar: req.file ? req.file.filename : "default-image-avatar.png",
            rol: "user"
          })
          .then( () => {
              return res.redirect("login");
            })
        .catch(error => console.log(error))

        }else{            
            return res.render("register",{
              old : req.body,  
              errores : errors.mapped()   
                   
            });
        }
    },

    login: (req, res) => {
      return res.render("login");
    },

  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      const { userEmail} = req.body

db.User.findOne({
  where: {
    userEmail
  }
}).then(({id, userName, avatar, rol}) => {
  req.session.userLogin = {
    id: +id,
    userName,
    avatar, 
    rol,
  }
      if (req.body.remember) {
        res.cookie("CeroTempo", req.session.userLogin, {
          maxAge: 1000 * 60 * 2})
      }
      res.redirect("/");
    })
    } else {
      return res.render("login", {
        old: req.body,
        errores: errors.mapped()
      });
    }
  },
  profile: (req,res) => {
    // let users = readUsers();
    const user = users.find(user => user.id === req.session.userLogin.id);
    return res.render('profile', {
      user
    }) 
  },
  updateProfile: (req,res) => {
    let user = db.User.findByPk(req.session.userLogin.id)
    Promise.all([user])
    .then(([user]) => 
    res.render('update', {
      user
    }))
  },
  processUpdateProfile : (req,res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const {userName, userSurname, userBirth} = req.body
      db.User.findByPk(req.session.userLogin.id, {
        attributes : ['password']
      })
      .then(user => {
        db.User.update(
          {
            userName : userName.trim(),
            userSurname : userSurname.trim(),
            userPass : userPass ? bcryptjs.hashSync(userPass, 10) : user.userPass,
            avatar : req.file && req.file.name 
          },
          {
            where: {
              id: req.session.userLogin.id
            }
          }
        ) .then( () => res.redirect('profile'))
      }).catch(error => console.log(error))
    }
},
  logout : (req,res) => {
    req.session.destroy();
    res.cookie('userCeroTempo',null,{maxAge : -1})
    return res.redirect('/')
  }

}
