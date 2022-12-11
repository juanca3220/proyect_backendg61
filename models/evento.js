const mongoose = require('mongoose');
const { Schema } = mongoose;

const EventoSchema = new Schema({
    fecha: { type: Date, required: true },
    equipo1: { type: String, required: true },
    equipo2: { type: String, required: true },
    tipo_deporte: { type: String, required: true },
    marcador_eq1: { type: String, required: true },
    marcador_eq2: { type: String, required: true },
});

module.exports = mongoose.model('Eventos', EventoSchema);