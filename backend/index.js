require('dotenv').config() 
const express = require("express");
const database_connection = require('./db/database_connection')
// const User = require('./models/user')
const app = express();
const apiRouter = require('./routes/user');
const Notification = require('./models/notifications');

app.use('/user', apiRouter);


async function run() {

await database_connection()
const john = new User({first_name: 'John', last_name: 'Forster', email:'test@email.com', password: 'password', full_address: 'Zetland House'})
john.save()

const order = new Notification({ order_recieved: 'Your order has been recieved'})
order.save()
}

run()

//Needs to be wrapped in async function because we want to wait
//for this to be done. We cant use await outside async function