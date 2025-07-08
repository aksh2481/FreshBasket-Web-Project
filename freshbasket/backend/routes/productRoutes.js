const express = require('express');
const router = express.Router();

// Define your product routes here
router.get('/', (req, res) => {
    res.send('Product API');
});

module.exports = router;
