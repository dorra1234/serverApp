const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    name:String,
    email:String,
    password:String,
  });
  const User = mongoose.model('User', UserSchema, 'User');

module.exports = {
  User: User, 
};