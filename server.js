var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");
var path = require("path");


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
  type: "application/vnd.api+json"
}));


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


app.get("/", function(req, res) {

res.sendFile(path.join(__dirname, "view.html"));
//res.sendFile(path.join(__dirname, "app/public/style.css"));
});

app.get("./make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));
});


// app.get("/api/tables", function(req, res) {
//   var newReservation = req.body;
//   //var waitList = req.body;
//   //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

//   console.log(newReservation);
//   //console.log(waitList)

//   //appUsers.push(newcharacter);

//   return res.json(newReservation);
// });
//var myOtherJs = require("./reserve.js");
function Reservation(name,phone,email,ID){
	this.name = name;
	this.phone = phone;
	this.email = email;
	this.ID = ID;
}


app.get("/api/tables", function(req, res) {
  //res.sendFile(path.join(__dirname, "app/public/survey.html"));
  //console.log(req);
  //console.log(res);
  //var newReservation = require.newReservation;
  res.end(JSON.stringify(newReservation));
});


app.post("/api/tables", function(req, res) {
  var newReservation = req.body;
  //newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newReservation);
  console.log("Post working");
  //characters.push(newcharacter);

  res.end(Reservation);
});



app.use(express.static(__dirname + '/'));

