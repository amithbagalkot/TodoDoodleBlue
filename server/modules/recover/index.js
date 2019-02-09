const express = require('express');
const router = express.Router();
const auth = require('../auth/auth.controller');
const recoverController = require('./recover.controller');

router.get('/get', auth.isAuthenticated(), recoverController.getTask);

module.exports = router;