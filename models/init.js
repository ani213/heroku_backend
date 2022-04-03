const util=require('../util')
const mongoose=require('mongoose');
const userSchema=require("./user")
module.exports=function(){
    util.model.Users=mongoose.model("Users",userSchema);
}