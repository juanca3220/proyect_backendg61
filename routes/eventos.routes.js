const express = require('express');
const router = express.Router();
const eventoController = require("../controllers/eventoController");
const { validarStore } = require('../validators/evento');
const auth = require('../middleware/auth');

router.get('/', eventoController.all);
router.get('/:id', auth, eventoController.find);
router.post('/', validarStore, auth, eventoController.store);
router.put('/:id', validarStore, auth, eventoController.update);
router.delete('/:id', auth, eventoController.delete);

module.exports = router;