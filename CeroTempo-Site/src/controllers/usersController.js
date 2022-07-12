const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");

const db = require("../database/models");

module.exports = {
  register: (req, res) => {
    return res.render("register");
  },

  processRegister: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let { userName, userSurname, userPass, userBirth, userEmail } = req.body;
      /* let lastID = users.length !== 0 ? users[users.length - 1].id : 0; */
      db.User.create({
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail: userEmail.trim(),
        userPass: bcryptjs.hashSync(userPass.trim(), 10),
        userBirth,
        avatar: req.file ? req.file.filename : "default-image-avatar.png",
        rol: "user",
      })
        .then(() => {
          //return res.redirect("login");
          req.session.userLogin = {
            id: +id,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail: userEmail.trim(),
            userBirth: userBirth,
            rol,
          };
          res.locals.user = req.session.user;
          return res.redirect("/");
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("register", {
        old: req.body,
        errores: errors.mapped(),
      });
    }
  },

  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    /* res.send(req.body); */
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      db.User.findOne({
        where: { userEmail: req.body.userEmail },
      })
        .then(({ id, userName, userSurname, userEmail, userBirth, rol }) => {
          req.session.userLogin = {
            id: +id,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userEmail: userEmail.trim(),
            userBirth: userBirth,
            rol,
          };

          if (req.body.remember) {
            res.cookie("CeroTempo", req.session.userLogin, {
              maxAge: 1000 * 60 * 2,
            });
          }

          /* res.local.user = req.session.user; */
          res.redirect("/");
        })
        .catch((errors) => console.log(errors));
    } else {
      return res.render("login", {
        errores: errors.mapped(),
        old: req.body,
      });
    }
  },

  profile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render("profile", {
        user,
      })
    );
  },

  updateProfile: (req, res) => {
    db.User.findByPk(req.session.userLogin.id)
      .then((user) => {
        res.render("update", {
          user,
        });
      })
      .catch((errors) => console.log(errors));

    /* let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render("update", {
        user,
      })
    ); */
  },

  processUpdateProfile: (req, res) => {
    let id = req.params.id;
    let { userName, userSurname, userPass } = req.body;
    db.User.update(
      {
        userName,
        userSurname,
        userPass,
        /* avatar: req.file ? req.file.filename : req.session.user.avatar, */
      },
      {
        where: { id: +id },
      }
    )
      .then(() => {
        res.redirect("/users/profile");
      })
      .catch((errors) => console.log(errors));
  },

  /* processUpdateProfile: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const { userName, userSurname, userPass } = req.body;
      db.User.findByPk(req.session.userLogin.id, {
        attributes: ["userPass"],
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
            return res.redirect("/users/profile");
          });
        })
        .catch((error) => console.log(error));
    }
  }, */

  logout: (req, res) => {
    req.session.destroy();
    res.cookie("userCeroTempo", null, { maxAge: -1 });
    return res.redirect("/");
  },
};
