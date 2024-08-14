const express = require('express');
const ServicioController = require('../controllers/servicios');

const api = express.Router();

api.post("/servicios/addService", ServicioController.addServicio);

module.exports = api;