const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
let fs = require('fs')
let path = require('path')

module.exports = {
  register: (req, res) => {
    return res.render('register');
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let {userName, userSurname, userPass, userBirth, userEmail} = req.body;
      db.User.create({
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail: userEmail.trim(),
        userPass: bcryptjs.hashSync(userPass.trim(), 10),
        userBirth,
        avatar: req.file ? req.file.filename : 'default-image-avatar.jpg', //sirve! , <NO BORRAR DEFAULT IMAGE DE PUBLIC>
        // avatar: 'default-image-avatar.jpg',  //se cambio a jpg, 
        rol: 'user',
      })
        .then(user => {
          req.session.userLogin = {
            id: user.id,
            userName: user.userName.trim(),
            userSurname: user.userSurname.trim(),
            userEmail: user.userEmail.trim(),
            userBirth: user.userBirth,
            rol: user.rol
          };
          res.locals.userLogin = req.session.userLogin; //se agrego login como está en middlewares locals
          return res.redirect('login');
        })
        .catch(errors => console.log(errors));
    } else {
      return res.render('register', {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },

  login: (req, res) => {
    res.render('login');
  },

  ////------------------de acá para arriba funciona----------------------------------/// NO MODIFICAR
  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.findOne({
        where: {userEmail: req.body.userEmail},
      })
        .then(({id, userName, userSurname, userEmail, userBirth, rol}) => {
          req.session.userLogin = {
            id: +id,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail: userEmail.trim(),
            userBirth: userBirth,
            rol,
          };

          if (req.body.remember) {
            res.cookie('CeroTempo', req.session.userLogin, {
              maxAge: 1000 * 60 * 2,
            });
          }
          res.redirect('/');
        })
        .catch((errors) => console.log(errors));
    } else {
      return res.render('login', {
        errores: errors.mapped(),
        old: req.body,
      });
    }
  },

  profile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render('profile', {
        user,
      })
    );
  },

  updateProfile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render('update', {
        user,
      })
    );
  },

  processUpdateProfile: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const {userName, userSurname, userPass} = req.body;
      db.User.findByPk(req.session.userLogin.id, {
        attributes: ['userPass'],
      })
        .then((user) => {
          db.User.update(
            {
              userName: userName.trim(),
              userSurname: userSurname.trim(),
              userPass: userPass ? bcryptjs.hashSync(userPass, 10) : user.userPass,
              avatar: req.file && req.file.filename,
            },
            {
              where: {
                id: req.session.userLogin.id,
              },
            }
          ).then(() => {
            return res.redirect('/users/profile');
          });
        })
        .catch((error) => console.log(error));
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.cookie('userCeroTempo', null, {maxAge: -1});
    return res.redirect('/');
  },
};
