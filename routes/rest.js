var express = require("express");
var router = express.Router();
var pythonshell = require("python-shell");
//import { PythonShell } from "python-shell";

/* GET home page. */
let options = {
  mode: "text",
  pythonPath: "python3",
  //args: ['value1', 'value2', 'value3']
};

router.post("/run_python", function (req, res, next) {
  console.log(req.body.content);
  pythonshell.PythonShell.runString(
    req.body.content,
    options,
    function (err, results) {
      if (err) throw err;
      console.log("python execution finished");
      res.send(results);
    }
  );
});

module.exports = router;
