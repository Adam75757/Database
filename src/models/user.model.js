import mongoose, { Schema,model,Types } from "mongoose";


let UserScheme = new Schema({
    username:{type:String,unique:true,required:true},
    age:{type:Number,required:true,min:0,max:100},
    email:{type:String,unique:true,match:/@/},

},{strict:true})

let UserModel = model("student",UserScheme)






export default UserModel


     
