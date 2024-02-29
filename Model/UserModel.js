   const mongoose = require('mongoose');
   const { schema } = mongoose;
   
   const UserSchema = new Schema({
    "name":"string",
    "email":"string",
    "password":"string"
   });

   const User = mongoose.model('User',UserSchema,"User")

   module.exports = {
    User: User,
   };