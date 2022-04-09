const util=require('../util')
const mongoose=require('mongoose');
const userSchema=require("./user");
const problemSchema=require("./problems");
module.exports=function(){
    util.model.Users=mongoose.model("Users",userSchema);
    util.model.Problems=mongoose.model("Problems",problemSchema);
}