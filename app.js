const express=require("express")
const mongoos=require("./db/connect")
const app=express();
const tasks=require("./routes/tasks");
const notFound=require("./middleware/notFound")
app.use(express.json());
require("dotenv").config();

app.use(express.static("./public"))
app.use("/api/v1/tasks",tasks);
app.use(notFound)

const main=async()=>{
    try{
        await mongoos(process.env.MONGO_URL);
        
        app.listen(3000,()=>{
        console.log("server listening to port 3000")
       }); 
       
    }
    catch(error){
        console.log(error)
    }
}

main();

//post,get(single),patch(single),delete
//Mb6d7LJ0LC88SLLX