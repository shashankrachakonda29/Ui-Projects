const express=require("express");
const path=require("path")
const formidable=require("formidable");
const bodyParser = require("body-parser");

var app=express();
app.use(bodyParser.urlencoded({
    extended:true
}))
// app.use(express.json());
// app.use(express.urlencoded({
//      extended:true
// }))
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"./views"))
// app.use(express.static(`${__dirname}/public`))

app.get("/",function(req,res){
    res.render("form")
})
app.post("/api/uploadFile",function(req,res){
    const form= new formidable.IncomingForm();
    form.parse(req);
        form.on("fileBegin",function(name,file){
            file.filepath=__dirname+ "/public/" + file.originalFilename;
            var data=file.filepath;
            console.log(data)
        })
        form.on("file",function(name,file){
            console.log("File Uploaded"+ file.originalFilename)
            res.send("File Uploaded")
        })
    // })
})

app.listen(3400)
console.log("Server Started : http://localhost:3400")