const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    id:{type: mongoose.Schema.Types.ObjectId, ref:'Post', required:true},
    name: {
        type: String,
        required: true,
      },
      
      company: {
        type: String,
        required: true,
      },
      
      price: {
        type: Number,
        required: true,
      },
      quantity:{
        type:Number,
        default:1
      }
});
module.exports = mongoose.model('Cart', cartSchema)