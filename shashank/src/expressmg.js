
const express=require("express");
const mongoClient=require("mongodb").MongoClient;

const ConnectionString="mongodb://127.0.0.1:27017";

const app=express();
mongoClient.connect(ConnectionString,(err)=>{
    if(!err){
        console.log("Connected To Database!")
    }
    else
    {
        console.log(err)
    }
})

app.listen(4500);
console.log("Server Started:http://localhost:4500");