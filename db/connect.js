const mongoose= require("mongoose");




 const mongoos=async (URL)=>{
    try{
        await mongoose.connect(URL)
            console.log("connected to database.........")}
        catch(error){
            console.log("couldn't connect to data base..")
        }
}

module.exports=mongoos;
// mongoose.connect(connectionstring )
// .then(()=>{console.log("connected to db")}).catch(error=>{console.log(error)})