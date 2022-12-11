const express = require('express');
const router = express.Router();
const deporteController = require("../controllers/deporteController");
const { validarStore } = require('../validators/deporte');
const auth = require('../middleware/auth');

router.get('/', auth, deporteController.all);
router.get('/:id', auth, deporteController.find);
router.post('/', validarStore, auth, deporteController.store);
router.put('/:id', validarStore, auth, deporteController.update);
router.delete('/:id', auth, deporteController.delete);

module.exports = router;