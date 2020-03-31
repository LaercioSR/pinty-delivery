const express = require('express');

const EstabelecimentoCategoriaController = require('./controllers/EstabelecimentoCategoriaController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send('Hello World!!!');
});

// Categoria de Estabelecimentos
routes.post('/estabelecimentos/categorias', EstabelecimentoCategoriaController.store);

// Estabelecimentos


module.exports = routes;