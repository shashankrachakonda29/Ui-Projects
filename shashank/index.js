var express = require('express');
const mongoose=require("mongoose")
var formidable = require('formidable');
const bodyParser=require("body-parser")

mongoose.connect("mongodb://127.0.0.1:27017/College",{useNewUrlParser:true,useUnifiedTopology:true})


var app = express();
app.use(bodyParser.urlencoded({
  extended:true
}))
app.set("views","./views")
app.set("view engine","ejs")



app.get('/', (req, res) => {
    res.render('image', { message: null });
  });
app.post('/submit-form', (req, res) => {
    const form =new  formidable.IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.render('form', { message: 'Error uploading file' });
      } else {
        const MyModel = mongoose.model('users', {
          name: String,
          photo: String
        });
        const myData = new MyModel({
          name: fields.name,
          photo: files.photo
        });
        console.log(myData)
        myData.save()
        .then(function(){
            console.log('Saved to MongoDB')}
        );
        res.render('form', { message: 'Form submitted successfully' });
      }
    });
  });


app.listen(3000);
console.log("Server Started:http://localhost:3000");
