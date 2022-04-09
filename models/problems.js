const mongoose=require('mongoose');
Schema=mongoose.Schema;
module.exports=new mongoose.Schema({
        user_id:{
            type: Schema.Types.ObjectId, ref: 'Users'
        },
        title:{
          type:String,
          required:true
        },
        question:{
            type:String,
        },
        answer:{
            type:String,
        },
       
},{ timestamps: true })