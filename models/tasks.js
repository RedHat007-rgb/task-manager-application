const mongoose=require("mongoose");

const TaskSchema=new mongoose.Schema({
    name:{
        type:String,
        require:[true,"name must be included"],
        trim:true,
        maxlength:15,
        minlength:4},
    completed:{
        type:Boolean,
        default:false
    },
})

module.exports=mongoose.model("Task",TaskSchema);