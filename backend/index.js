require('dotenv').config() 
const express = require("express");
const database_connection = require('./db/database_connection')
const User = require('./models/user')
const app = express();
const apiRouter = require('./routes/user');
const Notification = require('./models/notifications');
const Order = require('./models/orders');
const mongoose = require('mongoose');

// const Product = require('./models/products')


app.use('/user', apiRouter);
app.use('/notification', apiRouter);
app.use('/order', apiRouter);
// app.use('/product', apiRouter)



async function run() {

await database_connection()
const john = new User({first_name: 'John', last_name: 'Forster', email:'test@email.com', password: 'password', full_address: 'Zetland House'})
john.save()

const order = new Notification({ order_recieved: 'Your order has been recieved'})
order.save()

const new_order = new Order({
  user: 'johndoe',
  products: [
    {
      product: '5f06a774050e59000149e254',
      quantity: 1,
    },
  ],
});
  await new_order.save();
}



run()

//Needs to be wrapped in async function because we want to wait
//for this to be done. We cant use await outside async function