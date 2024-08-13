const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de parámetros
const ParametroSchema = new Schema({
  setting_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Genera un ObjectId único automáticamente
  },
  usuario_id: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia a la colección de usuarios (users)
    required: true,
  },
  nombre_barberia: {
    type: String,
    required: true,
  },
  logo_barberia: {
    type: String,
    required: true,
  },
  dias_trabajo: {
    type: [String],
    required: true,
  },
  horario_inicio: {
    type: String,
    required: true,
  },
  horario_fin: {
    type: String,
    required: true,
  },
  hora_almuerzo: {
    type: String,
    required: true,
  },
  intervalo_citas: {
    type: Number,
    required: true,
  },
  citas_por_dia: {
    type: Number,
    required: true,
  }
});

// Crear el modelo de parámetros basado en el esquema
const Parametro = mongoose.model('Parametro', ParametroSchema);

module.exports = Parametro;
