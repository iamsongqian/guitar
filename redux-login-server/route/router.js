var express = require("express");
var router = express.Router();



router.post("/users", (req, res) => {
  console.log(req.body)
  res.status(200).send(req.body);
});


module.exports = router;
