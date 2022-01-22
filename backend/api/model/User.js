const mongoose = require("mongoose");
var conn = mongoose.Collection;
var UserSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email: {
        type:String,
    },
    contact: {
        type:String,
    },
    isFarmer: {
        type:Boolean,
    },
    password: {
        type:String
    }
},
{ timestamps: true }
);

var User=mongoose.model('User',UserSchema);
module.exports=User;