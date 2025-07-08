const express = require('express');
const router = express.Router();
const { registerUser } = require('../controllers/userController');

// Define your user routes here
router.get('/', (req, res) => {
    res.send('User API');
});

router.post('/register', registerUser);

module.exports = router;
