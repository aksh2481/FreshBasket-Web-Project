const express = require('express');
const router = express.Router();
const { addItemToCart, getCart } = require('../controllers/cartController');

router.post('/add', addItemToCart);
router.get('/:userId', getCart);

module.exports = router;