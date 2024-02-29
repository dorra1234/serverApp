const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
  type:String,
  image:String,
  quality:String,
  location:String,
  number:String

   });
   const Product = mongoose.model('Product', ProductSchema, 'Product');

module.exports = {
  Product,
};