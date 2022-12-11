const express = require('express');
const router = express.Router();
const equipoController = require("../controllers/equipoController");
const { validarStore } = require('../validators/equipo');
const auth = require('../middleware/auth');

router.get('/', auth, equipoController.all);
router.get('/:id', auth, equipoController.find);
router.post('/', validarStore, auth, equipoController.store);
router.put('/:id', validarStore, auth, equipoController.update);
router.delete('/:id', auth, equipoController.delete);

module.exports = router;