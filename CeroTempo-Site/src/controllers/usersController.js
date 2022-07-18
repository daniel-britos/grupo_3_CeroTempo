const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');
let fs = require('fs')
let path = require('path')

module.exports = {
  register: (req, res) => {
    return res.render('register');
  },
  userList: (req, res) => {
		db.User.findAll({
			include : ['images']
		})
			.then(users => {                
				return res.render('userList',{users})
			})
			.catch(error => console.log(error))
      },
  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { userName, userSurname, userPass, userBirth, userEmail } = req.body;
      db.User.create({
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail,
        userPass: bcryptjs.hashSync(userPass.trim(), 10),
        userBirth,
        avatar: req.file ? req.file.filename : 'default-image-avatar.jpg', //sirve! , <NO BORRAR DEFAULT IMAGE DE PUBLIC>
        // avatar: 'default-image-avatar.jpg',  //se cambio a jpg, 
        rol: 'user'      
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
        where: { userEmail: req.body.userEmail },
      })
        .then(({ id, userName, userSurname, userEmail, userBirth, rol, avatar }) => {
          req.session.userLogin = {
            id: +id,
            userName,
            userSurname,
            userEmail,
            userBirth,
            avatar: avatar,
            rol,
          };

          if (req.body.remember) {
            res.cookie('CeroTempo', req.session.userLogin, {
              maxAge: 1000 * 60 * 2,
            });
          }
          // res.locals.userLogin = res.session.userLogin //se agrego esto!
          res.redirect('/');
        })
      // .catch((errors) => console.log(errors))
    } else {
      return res.render('login', {
        errors: errors.mapped(),
        // old: req.body,   //esto va? 
      });
    }
  },

  profile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);

    Promise.all([user]) //los corchetes van si o si, porque sino me trae los datos
      .then(([user]) =>
        res.render('profile', {
          user,
        })
      );
  },
  ////------------------de acá para arriba funciona----------------------------------/// NO MODIFICAR
  updateProfile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render('update', {
        user,
      })
    );
  },

  processUpdateProfile: (req, res) => {
    let errores = validationResult(req);
    if (errores.isEmpty()) {
      const { userName, userSurname, avatar, userBirth, userEmail } = req.body;
      db.User.update({
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail: userEmail,
        avatar: req.file ? req.file.filename : avatar,
        userBirth: userBirth
      },
        {
          where: {
            id: req.session.userLogin.id
          }
        })
        // if(req.file){
        //     if (fs.existsSync(path.join(__dirname, "../../public/images/users", user.avatar)) &&
        //       usuario.avatar !== "default-image-avatar.jpg") {
        //       fs.unlinkSync(path.join(__dirname, "../../public/images/users", userEdit.avatar))
        //     }
        //   }
        .then(() => {
          req.session.userLogin = {
            id: req.session.userLogin.id,
            userName: req.body.userName,
            userSurname: req.body.userSurname,
            userBirth: req.body.userBirth,
            userEmail: req.body.userEmail,
            avatar: req.file && req.file.filename || req.session.userLogin.avatar,
            rol: req.session.userLogin.rol
          }
          //return res.send(req.session.userLogin)
          res.redirect('/users/profile')
        })
        .catch(error => console.log(error))

    } else {
      return res.render('profile', {
        old: req.body,
        errors: errors.mapped(),

      });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.cookie('userCeroTempo', null, { maxAge: -1 });
    return res.redirect('/');
  }
}

