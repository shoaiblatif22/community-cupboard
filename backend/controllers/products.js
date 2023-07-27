const Product = require('../models/product');

const ProductController = {
  Create: async (req, res) => {
    const { name, description, imageUrl } = req.body;

    try {
      const product = new Product({
        name: name,
        description: description,
        imageUrl: imageUrl,
      });

      await product.save();

      return res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};

module.exports = ProductController;
