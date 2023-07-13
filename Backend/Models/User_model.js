const  mongoose = require("mongoose");
const authData=mongoose.Schema({

fastName:{
    type:String,
    require:true
},
lastName:{
    type:String,
    require:true,
},
poneNumber:{
    type:String,
    unique:true,
    require:true,
},
email:{
    type:String,
    unique:true,
    require:true,
},
password:{
    type:String
},
createDate:{
    type:Date, 
    default:Date.now()
}

},versionKey=false);

const userModel = mongoose.model('author',authData)

module.exports=userModel;