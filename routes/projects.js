const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects');
const validation = require('../middleware/validate');
const {isAuthenticated} = require("../middleware/authenticate");

router.get('/', projectsController.getAll);
router.get('/:id', projectsController.getSingle);
router.post('/', isAuthenticated, validation.saveProj, projectsController.createProj);
router.put('/:id', isAuthenticated, validation.saveProj, projectsController.updateProj);
router.delete('/:id', isAuthenticated, projectsController.deleteProj);


module.exports = router;