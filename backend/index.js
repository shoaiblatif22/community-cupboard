require('dotenv').config() 
const express = require("express");
const database_connection = require('./db/database_connection')
const User = require('./models/user')
const app = express();
const apiRouter = require('./routes/user');
const Notification = require('./models/notifications');
const Order = require('./models/orders');
const mongoose = require('mongoose');
const Product = require('./models/products'); 
const cors = require('cors'); //added this line 


// Enable cors middleware
app.use(cors());

// Middleware to parse JSON data in request bodies
app.use(express.json()); // Added to parse JSON data

app.use('/user', apiRouter);
app.use('/notification', apiRouter);
app.use('/order', apiRouter);
app.use('/product', apiRouter)

//we need to put each router on seperate variable

async function run() {

await database_connection()
const user = new User({first_name: 'John', last_name: 'Forster', email:'test@email.com', password: 'password', full_address: 'Zetland House'})
const savedUser = await user.save() // this saves the data into a variable which we can then view by runing console.log
//console.log(name)

const order = new Notification({ order_recieved: 'Your order has been recieved'})
order.save()

const new_order = new Order({
  user: savedUser._id, // calls on the function (savedUser) created in line 25 to access the object id form the database
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
// Added this too
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Needs to be wrapped in async function because we want to wait
//for this to be done. We cant use await outside async function