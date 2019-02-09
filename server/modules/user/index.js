const express = require('express');
const router = express.Router();
const userController = require('./user.controller');
const auth = require('../auth/auth.controller')

router.post('/register', userController.registerUser);
router.get('/profile', auth.isAuthenticated(), userController.userProfile );



module.exports = router;