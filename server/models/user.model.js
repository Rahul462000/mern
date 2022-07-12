const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name:{type:String, required: true},
    email:{type:String, required: true, unique:true},
    password:{type:String, required: true},
    quote:{type:String},
    // // name of the collection
}, 
{ collection:'user-data'}

)
// creating a model
const model = mongoose.model('UserData', User)

module.exports  = model

