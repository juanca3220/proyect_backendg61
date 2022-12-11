const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: String, required: true },
    cantidad: { type: String, required: true },
});

module.exports = mongoose.model('Producto', ProductoSchema);