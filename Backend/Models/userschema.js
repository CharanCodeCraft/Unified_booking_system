const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userschema=new mongoose.Schema({
    name:{type:String,required:true}, 
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    bookings:{type:Array,default:[]},
},{
    timestamps:true
})

userschema.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8)
    }
    next()
})
const User=mongoose.model('User',userschema)
module.exports=User