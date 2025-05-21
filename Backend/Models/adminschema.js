const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const admin=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
},{
    timestamps:true
})
admin.pre('save',async function(next){
    if(this.isModified('password')){
        this.password=await bcrypt.hash(this.password,8)
    }
    next()
})
const Admin=mongoose.model('Admin',admin)
module.exports=Admin