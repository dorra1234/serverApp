const { Product } = require("../model/Product");

const addProduct = async (req, res) => {
  try {
    const { type, image, quality, location, number } = req.body;

    const newProduct = new Product({
      type,
      image,
      quality,
      location,
      number,
    });

    await newProduct.save();
    res.json({ success: true, message: 'Product added successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  addProduct,
};
