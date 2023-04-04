const express=require("express");
const mongodb=require("mongodb").MongoClient;
const cors=require("cors");


const ConnectionString="mongodb://127.0.0.1:27017";
const app=express();
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}))

app.use(cors());
app.get("/",function(req,res){
    mongodb.connect(ConnectionString,function(err,ClientObj){
        if(!err){
            var dbo=ClientObj.db("College");
            dbo.collection("users").find({}).toArray(function(err,data){
                if(!err){
                    res.send(data)
                }
                else{
                    console.log(err)
                }
            })
        }
    })
})
app.get("/edit/:id",function(req,res){
    var userid=parseInt(req.params.id);
    mongodb.connect(ConnectionString,function(err,ClientObj){
        if(!err){
            var dbo=ClientObj.db("College");
            dbo.collection("users").find({id:userid}).toArray(function(err,data){
                if(!err){
                    res.send(data)
                }
                else{
                    console.log(err)
                }
            })
        }
    })
})
app.post("/adduser",function(req,res){
    var user={
        "id":req.body.id,
        "name":req.body.name,
        "lname":req.body.lname,
        "email":req.body.email,
        "password":req.body.password,
        "no":req.body.no,
        "age":req.body.age
    }    
    mongodb.connect(ConnectionString,function(err,ClientObj){
        if(!err){
            var dbo=ClientObj.db("College");
            dbo.collection("users").insertOne(user,function(err,result){
                if(!err){
                    console.log(user)
                }
                else{
                    console.log(err)
                }
            })
        }
    })
})
app.put("/update/:id",function(req,res){
    var user=require("./user")
    var id=parseInt(req.params.id);
    mongodb.connect(ConnectionString,function(err,ClientObj){
        if(!err){
            var dbo=ClientObj.db("College");
            dbo.collection("users").updateOne({id:id},user,function(err,data){
                if(!err){
                    res.send(data)
                }
                else
                {
                    console.log(err)
                }
            })

        }
    })
})
app.delete("/delete/:id",function(req,res){
    const id=parseInt(req.params.id);
    mongodb.connect(ConnectionString,function(err,ClientObj){
        if(!err){
            var dbo=ClientObj.db("College");
            dbo.collection("users").deleteOne({id:id},user,function(err,data){
                if(!err){
                    console.log("Record Deleted")
                }
                else{
                    console.log(err)
                }
            })
        }
    })
})


app.listen(4300)
console.log("Server Started : http://127.0.0.1:4300")