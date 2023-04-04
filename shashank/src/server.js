const http=require("http");

//Loacl host
const hostname="127.0.0.1";

//Port Number
const port=4500


const server=http.createServer((req,res)=>{
    res.write("Welcome to Node js \n");
    res.end("ok");
    
})

server.listen(port,hostname,(err)=>{
    if(!err){
        console.log(`Server Started:http://${hostname}:${port}`);
    }
    else
    {
        console.log("Something went wrong",err);
    }
})

