const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de la reseña
const ReseñaSchema = new Schema({
  reseña_id: {
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
  comentario: {
    type: String,
    required: true,
  },
  puntuacion: {
    type: Number,
    required: true,
    min: 1,
    max: 5, // Puntuación de 1 a 5 estrellas
  },
  fecha: {
    type: Date,
    default: Date.now, // Establece la fecha actual como valor predeterminado
  }
});

// Crear el modelo de reseña basado en el esquema
const Reseña = mongoose.model('Reseña', ReseñaSchema);

module.exports = Reseña;
