const mongoose = require("mongoose");

const NotificationSchema = new mongoose.Schema({
  order_recieved: { type: String, required: true }
})

const Notification = mongoose.model("notification", NotificationSchema);

module.exports = Notification;