const express = require('express');
const router = express.Router();

const tasksController = require('../controllers/tasks');
const validation = require('../middleware/validate');
const {isAuthenticated} = require("../middleware/authenticate");

router.get('/', tasksController.getAll);
router.get('/:id', tasksController.getSingle);
router.post('/', isAuthenticated, validation.saveTask , tasksController.createTask);
router.put('/:id', isAuthenticated, validation.saveTask , tasksController.updateTask);
router.delete('/:id', isAuthenticated, tasksController.deleteTask);

module.exports = router;
