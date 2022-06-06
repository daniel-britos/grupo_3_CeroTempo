const bcryptjs = require("bcryptjs");
const { check } = require("express-validator");
const users = require("../data/userDataBase.json");

module.exports = [
  check("userEmail")
    .notEmpty().withMessage("Enter your email").bail()
    .isEmail().withMessage("Invalid email"),

  check("userPass")
    .notEmpty().withMessage("Enter your password").bail()
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
