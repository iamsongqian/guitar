var express = require("express");
var router = require("./route/router");
var bodyParser = require("body-parser");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(3030, function() {
  console.log("app is running at port 3030.");
});
