const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const{API_VERSION} = require('./constants');
const app = express();

//Configurar bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Configurar static files
app.use(express.static('uploads'));

//Configurar cors
app.use(cors());

module.exports = app;