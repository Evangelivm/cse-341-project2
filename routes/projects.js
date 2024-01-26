const express = require('express');
const router = express.Router();

const projectsController = require('../controllers/projects');
const validation = require('../middleware/validate');

router.get('/', projectsController.getAll);
router.get('/:id', projectsController.getSingle);
router.post('/', validation.saveProj, projectsController.createProj);
router.put('/:id', validation.saveProj, projectsController.updateProj);
router.delete('/:id', projectsController.deleteProj);


module.exports = router;