const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const{API_VERSION} = require('./constants');
const app = express();

//import rutas
const authRoutes = require('./router/auth');
const serviciosRoutes = require('./router/servicios');

//Configurar bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configurar static files
app.use(express.static('uploads'));

//Configurar cors
app.use(cors());

//Configurar Ruta
app.use(`/api/${API_VERSION}`, authRoutes);
app.use(`/api/${API_VERSION}`, serviciosRoutes);


module.exports = app;