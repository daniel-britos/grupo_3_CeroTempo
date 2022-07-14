const bcryptjs = require("bcryptjs");
const { check,body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("userEmail").notEmpty().withMessage("Enter your email").bail().isEmail().withMessage("Invalid email"),

  body('userEmail')
  .custom((value, {req}) => {
      return Usuario.findOne({
          where : { userEmail : value}
      })
      .then(user => {
          if (!bcrypt.compareSync(req.body.userPass, user.userPass)){
              return Promise.reject('Invalid credentials')
          }
      })
      .catch(errors => {
          console.log(errors);
          return Promise.reject("Email or password is incorrect")
      })
  }),


  check("userPass")
    .notEmpty()
    .withMessage("Enter your password")
    .bail()
    .custom((value, { req }) => {
      return db.User.findOne({
        where: {
          userEmail: req.body.userEmail,
        },
      })
        .then((user) => {
          if (!user || !bcryptjs.compareSync(value, user.userPass)) {
            return Promise.reject();
          }
        })
        .catch(() => Promise.reject("Invalid password"));
    }),
];
//--------------------Es necesario hacer promesa en userEmail?? 