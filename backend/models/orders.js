const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  orderDate: {
    type: Date,
    default: Date.now,
  },
//   status: {
//     type: String,
//     enum: ['Pending', 'Shipped', 'Delivered'],
//     default: 'Pending',
//   },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
