var express = require("express");
var router = express.Router();
var path = require("path");
var restRouter = require("./rest");

/* GET users listing. */
router.get("/fibonacci", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/fibonacci.html"));
});

router.get("/lists", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/mergelists.html"));
});

router.use("/", express.static(path.join(__dirname, "../public")));

router.use("/rest", restRouter);

module.exports = router;
