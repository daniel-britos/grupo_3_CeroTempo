var express = require("express");
var router = express.Router();
const profileCheck = require("../middlewares/profileCheck");

const {
  pCart,
  pDetail,
  pMain,
  pSearch,
  pStrings,
  pWind,
  pPercussion,
  pIdiophones,
  pElectronics,
} = require("../controllers/productController");

router.get("/productMain", pMain);
router.get("/productCart", profileCheck, pCart);
router.get("/productDetail/:id", pDetail);
router.get("/search", pSearch);
router.get("/categoryStrings", pStrings);
router.get("/categoryWind", pWind);
router.get("/categoryPercussion", pPercussion);
router.get("/categoryIdiophones", pIdiophones);
router.get("/categoryElectronics", pElectronics);

module.exports = router;
