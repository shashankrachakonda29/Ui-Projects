const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
var Db = require("./ConnectionString");
var Student = require("./user");

app.get("/", function (req, res) {
  var data = Student.find()
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
app.post("/adduser", function (req, res) {
  var data = {
    id: req.body.id,
    name: req.body.name,
    lname: req.body.lname,
    email: req.body.email,
    password: req.body.password,
    gender: req.body.gender,
    no: req.body.no,
    age: req.body.age,
  };
  var user = new Student(data);
  user
    .save()
    .then(function (user) {
      console.log(user);
    })
    .catch(function (err) {
      console.log(err);
    });
  res.redirect("/");
});
app.get("/edit/:id", function (req, res) {
  var userid = req.params.id;
  var data = Student.findOne({ id: userid })
    .then(function (data) {
      res.send(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
app.put("/update/:id", function (req, res) {
  var userid = req.params.id;
  console.log(userid);
  var Studentid = { id: userid };
  var query = {
    $set: {
      id: req.body.id,
      name: req.body.name,
      lname: req.body.lname,
      email: req.body.email,
      password: req.body.password,
      gender: req.body.gender,
      no: req.body.no,
      age: req.body.age,
    },
  };
  data = Student.updateOne(Studentid, query)
    .then(function (data) {
      console.log("Record Updated");
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
});
app.delete("/delete/:id", function (req, res) {
  var id = req.params.id;
  console.log(id);
  data = Student.deleteOne({ id: id })
    .then(function (data) {
      console.log("Record Deleted");
    })
    .catch(function (err) {
      console.log(err);
    });
});

app.listen(4300);
console.log("Server Started : http://127.0.0.1:4300");
