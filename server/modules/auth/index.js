const express = require('express');
const router = express.Router();
require('./local/passport');

router.use('/local', require('./local'));

module.exports = router;