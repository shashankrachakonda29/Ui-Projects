const mongoose=require("mongoose");
var ConnectionString="mongodb://127.0.0.1:27017/College";

mongoose.connect(ConnectionString,{useNewUrlParser:true,useUnifiedTopology:true})
.then(function(res){
    console.log("Connected to DataBase !!");
})
.catch(function(err){
    console.log(err);
})