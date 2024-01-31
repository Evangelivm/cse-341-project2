const express = require('express');
const router = express.Router();

const teamController = require('../controllers/team-members');
const {isAuthenticated} = require("../middleware/authenticate");
const validation = require('../middleware/validate');

router.get('/', teamController.getAll);
router.get('/:id', teamController.getSingle);
router.post('/', teamController.createTeamMem);
router.put('/:id', teamController.updateTeamMem);
router.delete('/:id', teamController.deleteTeamMem);


module.exports = router;