const Order = require('../models/order');

const OrderController = {
  Create: (req, res) => {
    const { user, products, date } = req.body;

    const order = new Order({
      user: user,
      products: products,
      date: date.now 
    //   status: status,
    });

    order.save((err) => {
      if (err) {
        return res.status(400).json({ message: "Bad request" });
      } else {
        return res.status(201).json({ message: "OK" });
      }
    });
  },
};

module.exports = OrderController;
