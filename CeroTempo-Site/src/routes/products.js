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
  brandCremona,
  brandFender,
  brandMapex,
  brandYamaha,
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
router.get("/brandCremona", brandCremona);
router.get("/brandFender", brandFender);
router.get("/brandMapex", brandMapex);
router.get("/brandYamaha", brandYamaha);

module.exports = router;
