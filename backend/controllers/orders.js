const Order = require('../models/order');

const OrderController = {
  Create: (req, res) => {
    const { user, packages, totalAmount } = req.body;

    const order = new Order({
      user: user,
      packages: packages,
      totalAmount: totalAmount,
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
