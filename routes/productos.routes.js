const express = require('express');
const router = express.Router();

const productoController = require("../controllers/productoController");

router.get('/', productoController.consultarTodos);
router.get('/:id', productoController.consultarUno);
router.post('/', productoController.agregarNuevo);
router.put('/:id', productoController.actualizar);
router.delete('/:id', productoController.eliminar);

module.exports = router;