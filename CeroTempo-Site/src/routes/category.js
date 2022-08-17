var express = require("express");
var router = express.Router();
const categoryValidation = require("../validations/categoryValidation");
// const adminCheck = require("../middlewares/adminCheck");

const { allCategories, addCategory, storeCategory, editCategory, updateCategory,  removeCategory} = require("../controllers/categoryController");

router
  .get("/categoryList", allCategories) //adminCheck
  .get("/addCategory", addCategory) //adminCheck
  .post("/addcategory", categoryValidation, storeCategory)
  .get("/editCategory/:id", editCategory) //adminCheck
  .put("/updateCategory/:id", categoryValidation, updateCategory)
  .delete("/removeCategory/:id", removeCategory);

module.exports = router;
