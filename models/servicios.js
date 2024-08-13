const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del servicio
const ServicioSchema = new Schema({
  service_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Genera un ObjectId único automáticamente
  },
  nombre: {
    type: String,
    required: true,
  },
  descripcion: {
    type: String,
    required: true,
  },
  duracion: {
    type: Number,
    required: true,
  },
  costo: {
    type: Number,
    required: true,
  }
});

// Crear el modelo de servicio basado en el esquema
const Servicio = mongoose.model('Servicio', ServicioSchema);

module.exports = Servicio;
