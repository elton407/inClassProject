var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});



