const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/calculator.html");
});

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/", function(req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);
  var result = num1 + num2;
  res.send("Result is : " + result);
});

app.post("/bmicalculator", function(req, res) {
  var wt = Number(req.body.wt);
  var ht = Number(req.body.ht);
  var bmi = wt / Math.pow(ht, 2);
  res.send("Your BMI is : " + bmi);
});

app.listen(3000, function() {
  console.log("Server has been started at port 3000.");
});
