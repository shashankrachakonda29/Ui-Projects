const mongoClient=require("mongodb").MongoClient;
const ConnectionString="mongodb://127.0.0.1:27017";

mongoClient.connect(ConnectionString,(err)=>{
    if(!err){
        console.log("Connected to Database!!")
    }
    else{
        console.log(err);
    }
})