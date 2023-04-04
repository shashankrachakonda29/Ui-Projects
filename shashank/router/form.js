const express=require("express");
const ejs=require("ejs");
const app=express();
app.use(express.json());   //it converts the data to json format
app.use(express.urlencoded({
    extended:true
}))
app.use(express.static("public"));
app.set("views","public")
app.set("view engine","ejs")

// api routers to render the form
app.get("/",(req,res)=>{
    res.render("form")
})
//getting the data form the form
app.get("/Student",(req,res)=>{
    var data=req.query;
    // it shows the data in terminal
    console.log(data)

    // it show the data in the browser
    res.send(data)
})
app.listen(4400)
console.log("Server Started :http://localhost:4400 ")