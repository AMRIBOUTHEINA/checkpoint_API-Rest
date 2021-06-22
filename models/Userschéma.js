let mongoose = require('mongoose')
const Schema= mongoose.Schema

const Userschéma = new Schema({
    firstName: String ,
    lastName: String ,
    age: Number,
   
})

module.exports=mongoose.model('user', Userschéma)









