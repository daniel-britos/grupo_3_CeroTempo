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
        .then(({id, userName, userSurname, userEmail, userBirth, rol, avatar}) => {
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

    Promise.all([user])
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
////------------------de acá para arriba funciona----------------------------------/// NO MODIFICAR
  // processUpdateProfile: (req, res) => {
  //   let errors = validationResult(req);
  //   if (errors.isEmpty()) {
  //     const {userName, userSurname, userPass} = req.body;

  //     db.User.findByPk(req.session.userLogin.id, {
  //       attributes: ['userPass'],
  //     })
  //       .then((user) => {
  //         db.User.update(
  //           {
  //             userName: userName.trim(),
  //             userSurname: userSurname.trim(),
  //             userPass: userPass ? bcryptjs.hashSync(userPass, 10) : user.userPass,
  //             avatar: req.file && req.file.filename,
  //           },
  //           {
  //             where: {
  //               id: req.session.userLogin.id,
  //             },
  //           }
  //         ).then(() => {
  //           return res.redirect('/users/profile');
  //         });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  // },
  //----------------------------
//   updateProfile: (req, res) => {
//     let errors = validationResult(req);

//     if (errors.isEmpty()) {
//       let { userName, userSurname, userPass} = req.body;
//   db.Users.update(
//     {
//       userName,
//       userSurname,
//       userPass,
//       avatar: req.file && req.file.filename,
//     },
//     {
//       where: {
//         id: req.params.id,
//       },
//     }
//   ).then((result) => {
//       res.redirect("/users/profile");
//     });
// } else {
//   res.render("userProfileEdit", {
//     errors: errors.mapped(),
//     old: req.body,
//     session: req.session,
//   });
// }
// },
//----------------------------------
// processUpdateProfile: (req, res) => {
     
//   const errors = validationResult(req);

//    if (errors.isEmpty()) {
//     let {userName, userSurname, userEmail, userBirth,rol
//     } = req.body;

//     let oUser = db.User.findByPk(req.session.userLogin.id);

//     const user = db.User.update({
//       userName: userName.trim(),
//       userSurname: userSurname.trim(),
//       userEmail,
//       userBirth,
//       avatar: req.file ? req.file.filename : oUser.avatar,
//       rol,
//     },{
//       where: {
//         id: req.params.id
//     }
//     } )
//     const editUser = db.User.findByPk(req.params.id)

//     req.session.userLogin = {
//       id: editUser.id,
//       userName: editUser.userName,
//       userSurname: editUser.userSurname,
//       avatar: editUser.avatar,
//       rol: editUser.rol,
//   }
//     if (req.file) {
//       if (
//           fs.existsSync(
//               path.resolve(__dirname, '..', '..', 'public', 'images', 'users', editUser.image)
//           ) && userEdited.image !== "default-image-avatar.jpg"
//       ) {
//           fs.unlinkSync(
//               path.resolve(__dirname, '..', '..', 'public', 'images', 'users', oUser.image)
//           );
//       }
//   }
//   return res.redirect((`profile`))
//   } 
//    .catch(error => console.log(error))
//  } else {
//        return res.render('users/updateProfile', {
//            usuario: req.body,
//            errors: errors.mapped(),

//        });

//    }
// },
//--------------------------
processUpdateProfile: (req, res) => {
  const errors = validationResult(req);

  if (errors.isEmpty()) {
    if(req.file){
      if(fs.existsSync(path.join(__dirname, "../../public/images/users",req.session.userLogin.avatar)) &&
        req.session.userLogin.avatar !== "default-image-avatar.jpeg"){
          fs.unlinkSync(path.join(__dirname, "../../public/images/users",req.session.userLogin.avatar))
        }
    }
   
  let { userName, userSurname,userBirth,rol } = req.body;
  db.User.findByPk(req.session.userLogin.id)
    .then((user) => {
      db.User.update(
        {
          userName: userName.trim(),
          userSurname: userSurname.trim(),
          userBirth,
          avatar: req.file && req.file.filename || user.avatar,
          rol,
        },
        {
          where : {
            id : req.session.userLogin.id
          }
        }
        
      )
     return res.redirect('/')
     
    }
    )
    .catch(error => console.log(error))
   
  } else {
    return res.render("update", {
      user: req.body,
      errors: errors.mapped(),
    });
  }
},
  logout: (req, res) => {
    req.session.destroy();
    res.cookie('userCeroTempo', null, {maxAge: -1});
    return res.redirect('/');
  },
};
