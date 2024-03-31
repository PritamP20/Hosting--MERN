const mongoose = require('mongoose');
const {Schema} = mongoose;

const productSchema = new Schema({
    title: {type: String, required: true, unique: true},
    description: {type: String},
    price: {type: Number, min:[0,'wrong price'], required: true},
    discountPercentage: {type: Number, min:[0,'invalid discount'], max:[50,'invalid discount']},
    rating: {type: Number, min:[0,'invalid ratings'], max:[5,'invalid rating'], default:0},
    brand: {type:String, required: true},
    category: {type: String, required: true},
    thumbnail: {type:String, required: true},
    images: [String],
  });
  
  exports.Product = mongoose.model('Product', productSchema)