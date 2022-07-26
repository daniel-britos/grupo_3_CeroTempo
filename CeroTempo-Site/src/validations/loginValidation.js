const bcryptjs = require("bcryptjs");
const { check,body } = require("express-validator");
const db = require("../database/models");

module.exports = [
  check("userEmail")
  .notEmpty()
  .withMessage("Enter your email").bail()
  .isEmail().withMessage("Invalid email")
  .custom((value,{req}) => {
    return db.User.findOne({
     where: {
         userEmail: req.body.userEmail
     }
    })
    .then(user =>{
     if(!user) {
         return Promise.reject() 
     }
    }).catch(() => Promise.reject('Invalid Email'))
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