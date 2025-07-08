const Cart = require('../models/Cart');
const Product = require('../models/Product');

const addItemToCart = async (req, res) => {
    const { userId, productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user: userId });

        if (!cart) {
            cart = await Cart.create({ user: userId, items: [] });
        }

        const product = await Product.findById(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);

        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }

        await cart.save();

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getCart = async (req, res) => {
    const { userId } = req.params;

    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');

        if (!cart) {
            return res.status(404).json({ message: 'Cart not found' });
        }

        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { addItemToCart, getCart };