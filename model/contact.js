import { mongoose } from "mongoose";
const schema=mongoose.Schema({
    name:String,
    email:String,
    about:String,
})

 const User=mongoose.model("user",schema)
 export default User