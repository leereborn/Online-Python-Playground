var express = require("express");
var router = express.Router();
var path = require("path");

/* GET users listing. */
router.get("/fibonacci", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/fibonacci.html"));
});

router.get("/lists", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/mergelists.html"));
});

router.get("/python-playground", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/playground.html"));
});

router.use("/", express.static(path.join(__dirname, "../public")));

module.exports = router;
