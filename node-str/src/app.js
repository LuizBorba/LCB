'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require ('mongoose');


const app = express();
const router = express.Router();

// Banco de Dados
mongoose.connect ('mongodb+srv://luiz:luiz@ndstr-jssgs.azure.mongodb.net/admin?retryWrites=true&w=majority')

// Carrega os Models
const Product = require('./models/product');

// Carregar as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json()); +
app.use(bodyParser.urlencoded({
     extended: false 
}));

app.use('/', indexRoute);
app.use('/products', productRoute);


module.exports = app;