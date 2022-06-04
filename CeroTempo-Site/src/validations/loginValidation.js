const bcryptjs = require("bcryptjs");
const { check } = require("express-validator");
const users = require("../data/userDataBase.json");

module.exports = [
  check("userEmail")
    .notEmpty().withMessage("Please, enter your email").bail()
    .isEmail().withMessage("Please, enter a valid email"),

  check("userPass")
    .notEmpty().withMessage("Please, enter your password").bail()
    .custom((value, { req }) => {
      const user = users.find((user) => user.userEmail === req.body.userEmail);
      if (!user) {
        return false;
      } else {
        if (!bcryptjs.compareSync(value, user.userPass)) {
          return false;
        }
      }
      return true;
    }).withMessage("Invalid password"),
];
