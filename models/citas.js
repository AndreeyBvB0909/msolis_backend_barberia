const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de la cita
const CitaSchema = new Schema({
  cita_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Genera un ObjectId único automáticamente
  },
  usuario_id: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia a la colección de usuarios (users)
    required: true,
  },
  servicio_id: {
    type: Schema.Types.ObjectId,
    ref: 'Servicio', // Referencia a la colección de servicios (services)
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  hora_inicio: {
    type: String,
    required: true,
  },
  hora_fin: {
    type: String,
    required: true,
  },
  estado: {
    type: String,
    enum: ['pendiente', 'cancelada', 'completada'], // Solo permite estos estados
    default: 'pendiente',
  },
  costo: {
    type: Number,
    required: true,
  },
  reseña: {
    type: Schema.Types.ObjectId,
    ref: 'Review', // Referencia a la colección de reseñas (reviews)
  }
});

// Crear el modelo de cita basado en el esquema
const Cita = mongoose.model('Cita', CitaSchema);

module.exports = Cita;
