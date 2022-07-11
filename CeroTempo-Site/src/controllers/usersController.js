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
      let lastID = users.length !== 0 ? users[users.length - 1].id : 0;
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
          return res.redirect("login");
        })
        .catch((error) => console.log(error));
    } else {
      return res.render("register", {
        old: req.body,
        errores: errors.mapped(),
      });
    }
  },

  /*  if (errors.isEmpty()) {
      let { userName, userSurname, userPass, userBirth, userEmail } = req.body;
      let lastID = users.length !== 0 ? users[users.length - 1].id : 0;
      let newUser = {
        id: +lastID + 1,
        userName: userName.trim(),
        userSurname: userSurname.trim(),
        userEmail,
        userPass: bcryptjs.hashSync(userPass.trim(), 10),
        userBirth,
        avatar: req.file ? req.file.filename : "default-image-avatar.png",
        rol: "user",
      };

      users.push(newUser);

      fs.writeFileSync(path.resolve(__dirname, "..", "data", "userDataBase.json"), JSON.stringify(users, null, 3), "utf-8");
      return res.redirect("/");
    } else {
      return res.render("register", {
        errores: errors.mapped(),
        old: req.body,
      });
    }
  }, */

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

  /* profile: (req, res) => {
    let users = readUsers();
    const user = users.find((user) => user.id === req.session.userLogin.id);
    return res.render("profile", {
      user,
    });
  }, */

  updateProfile: (req, res) => {
    let user = db.User.findByPk(req.session.userLogin.id);
    Promise.all([user]).then(([user]) =>
      res.render("update", {
        user,
      })
    );
  },

  /*  updateProfile: (req, res) => {
    let users = readUsers();
    const user = users.find((user) => user.id === req.session.userLogin.id);
    return res.render("update", {
      user,
    });
  }, */

  processUpdateProfile: (req, res) => {
    let errors = validationResult(req);
    if (errors.isEmpty()) {
      const { userName, userSurname, userBirth } = req.body;
      const { id } = users.find((user) => user.id === req.session.userLogin.id);

      const usersModify = users.map((user) => {
        if (user.id === id) {
          let userModify = {
            ...user,
            userName: userName.trim(),
            userSurname: userSurname.trim(),
            userBirth: userBirth,
            avatar: req.file ? req.file.filename : user.avatar,
          };

          if (req.file) {
            if (
              fs.existsSync(path.resolve(__dirname, "..", "public", "images", "users", user.avatar)) &&
              user.avatar !== "default-image-avatar.png"
            ) {
              fs.unlinkSync(path.resolve(__dirname, "..", "public", "images", "users", user.avatar));
            }
          }
          return userModify;
        }
        return user;
      });

      fs.writeFileSync(path.resolve(__dirname, "..", "data", "userDataBase.json"), JSON.stringify(usersModify, null, 3), "utf-8");

      req.session.userLogin = {
        ...req.session.userLogin,
        userName,
      };

      return res.redirect("/");
    } else {
      console.log(errors);
      return res.render("update", {
        user: req.body,
        errors: errors.mapped(),
      });
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    res.cookie("userCeroTempo", null, { maxAge: -1 });
    return res.redirect("/");
  },
};
