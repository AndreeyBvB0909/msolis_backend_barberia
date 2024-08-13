const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Definir el esquema de dashboard
const DashboardSchema = new Schema({
  dashboard_id: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(), // Genera un ObjectId único automáticamente
  },
  usuario_id: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario', // Referencia a la colección de usuarios (users)
    required: true,
  },
  citas_pendientes: {
    type: Number,
    required: true,
    default: 0,
  },
  citas_disponibles: {
    type: Number,
    required: true,
    default: 0,
  },
  servicios_realizados: {
    type: Number,
    required: true,
    default: 0,
  },
  dinero_generado: {
    type: Number,
    required: true,
    default: 0.0,
  }
});

// Crear el modelo de dashboard basado en el esquema
const Dashboard = mongoose.model('Dashboard', DashboardSchema);

module.exports = Dashboard;
