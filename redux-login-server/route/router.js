var express = require("express");
var router = express.Router();



router.post("/users", (req, res) => {
  res.status(200).send(req.body);
});


module.exports = router;
