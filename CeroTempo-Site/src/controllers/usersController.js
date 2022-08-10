const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const db = require("../database/models");
let fs = require("fs");
let path = require("path");

module.exports = {
  register: (req, res) => {
    return res.render("register");
  },
  userList: (req, res) => {
    db.User.findAll()
      .then((users) => {
        return res.render("userList", { users });
      })
      .catch((error) => console.log(error));
  },
  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let {userName, userSurname, userPass, userBirth, userEmail} = req.body;
      db.User.create({
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail,
        userPass: bcryptjs.hashSync(userPass.trim(), 10),
        userBirth,
        avatar: req.file ? req.file.filename : "default-image-avatar.jpg", // <NO BORRAR DEFAULT IMAGE DE PUBLIC>
        rol: "user",
      })
        .then((user) => {
          req.session.userLogin = {
            id: user.id,
            userName: user.userName.trim(),
            userSurname: user.userSurname.trim(),
            userEmail: user.userEmail.trim(),
            userBirth: user.userBirth,
            rol: user.rol,
          };
          res.locals.userLogin = req.session.userLogin; //se agrego login como está en middlewares locals
          return res.redirect("login");
        })
        .catch((errors) => console.log(errors));
    } else {
      return res.render("register", {
        errors: errors.mapped(),
        old: req.body,
      });
    }
  },
  login: (req, res) => {
    res.render("login");
  },
  processLogin: (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.findOne({
        where: { userEmail: req.body.userEmail },
      }).then(
        ({ id, userName, userSurname, userEmail, userBirth, rol, avatar }) => {
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
            res.cookie("CeroTempo", req.session.userLogin, {
              maxAge: 1000 * 60 * 2,
            });
          }
          // res.locals.userLogin = res.session.userLogin //se agrego esto!
          res.redirect("/");
        }
      );
    } else {
      return res.render("login", {
        errors: errors.mapped(),
      });
    }
  },
  profile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);

    Promise.all([user]) 
      .then(([user]) =>
        res.render("profile", {
          user,
        })
      )
      .catch((error) => console.log(error));
  },



  updateProfile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);

    Promise.all([user]) 
      .then(([user]) =>
        res.render("update", {
          user,
        })
      )
      .catch((error) => console.log(error));
  },



  processUpdateProfile: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const { userName, userSurname, avatar, userBirth, userEmail } = req.body;
      db.User.update(
        {
          userName: userName.trim(),
          userSurname: userSurname.trim(),
          userEmail: userEmail,
          avatar: req.file ? req.file.filename : avatar,
          userBirth: userBirth,
        },
        {
          where: {
            id: req.session.userLogin.id,
          },
        }
      )

        .then(() => {
          req.session.userLogin = {
            id: req.session.userLogin.id,
            userName: req.body.userName,
            userSurname: req.body.userSurname,
            userBirth: req.body.userBirth,
            userEmail: req.body.userEmail,
            avatar:
              (req.file && req.file.filename) || req.session.userLogin.avatar,
            rol: req.session.userLogin.rol,
          };
          //return res.send(req.session.userLogin)
          res.redirect("/users/profile");
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("profile", {
        old: req.body,
        errors: errors.mapped(),
      });
    }
  },
  logout: (req, res) => {
    req.session.destroy();
    res.cookie("userCeroTempo", null, { maxAge: -1 });
    return res.redirect("/");
  },
  remove: (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((data) => {
        return res.redirect("/users/userList");
      })
      .catch((error) => console.log(error));
  },

  /* APIs */
  checkEmail: async (req, res) => {
    try {
      let user = await db.User.findOne({
        where: {
          userEmail: req.body.userEmail,
        },
      });
      let response = {
        ok: true,
        data: user ? true : false,
      };
      return res.status(200).json(response);
    } catch (error) {
      console.log(error);
      return res.status(error.status || 500).json({
        ok: false,
        msg: error.message || 'Comuniquese con el administrador del sitio',
      });
    }
  },
};
