const express = require('express');
const router = express.Router();
const taskController = require('./task.controller');
const auth = require('../auth/auth.controller')

router.post('/add',auth.isAuthenticated(), taskController.addTask);
router.delete('/delete/:id', auth.isAuthenticated(),taskController.deleteTask);
router.put('/update/:id', auth.isAuthenticated(), taskController.updateTask );
router.get('/get', auth.isAuthenticated(), taskController.getTasks);


module.exports = router;