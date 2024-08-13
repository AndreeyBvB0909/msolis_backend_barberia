const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema del usuario
const UsuarioSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Genera un ObjectId único automáticamente
  },
  nombre: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Asegura que el email sea único en la base de datos
  },
  password: {
    type: String,
    required: true,
  },
  rol: {
    type: String,
    enum: ['cliente', 'administrador'], // Solo permite estos dos roles
    default: 'cliente',
  },
  telefono: {
    type: String,
    required: true,
  },
  fecha_registro: {
    type: Date,
    default: Date.now, // Establece la fecha actual como valor predeterminado
  },
  reseñas: [{
    type: Schema.Types.ObjectId,
    ref: 'Review', // Referencia a la colección de reseñas (reviews)
  }]
});

// Crear el modelo de usuario basado en el esquema
const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;
