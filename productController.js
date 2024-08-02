const Product = require('../models/Product');

exports.addProduct = async (req, res) => {
    const { name, description, price, imageUrl } = req.body;

    try {
        const newProduct = new Product({ name, description, price, imageUrl });
        await newProduct.save();
        res.status(201).json({ msg: 'Product added successfully' });
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
};
