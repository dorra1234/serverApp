const { Product } = require("../model/Product");

const getProduct = async (req, res) => {
    try {
      const products = await Product.find();
      // Set Cache-Control header to prevent caching
    res.header('Cache-Control', 'no-store');
      res.status(200).json(products);
    } catch (error) {
      console.error("Error in getProduct:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };
  

module.exports = {
  getProduct,
};
