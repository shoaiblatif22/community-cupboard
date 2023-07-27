const Notification = require('../models/notification');
const User = require('../models/user');

const NotificationController = {
  Create: (req, res) => {
    const { order_recieved } = req.body; //destructuring - look up//
  

    const notification = new Notification({
      order_recieved: order_recieved,
    })

    notification.save((err) => {
      if (err) {
        return res.status(400).json({ message: "Bad request" });
      } else {
        return res.status(201).json({ message: "OK" });
        
      }
    })
  }, 
//this is a trailing comma, this is optional.
//If we were to add more things to this object, 
// we need commas to seperate them.
}

module.export = NotificationController;






