const { Product } = require("../model/Product");

const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id; 
        const result = await Product.findByIdAndDelete(productId);

        if (!result) { 
            console.log('Product not found');
            return res.status(404).send('Product not found');
        }
        console.log('Product deleted successfully');
        return res.send('Product deleted successfully');
    } catch (err) {
        console.error('Error deleting product:', err);
        return res.status(500).send('Error deleting product');
    }
};
module.exports = {
    deleteProductById: deleteProductById
};
