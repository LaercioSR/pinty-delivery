const express = require('express');

const EstabelecimentoCategoriaController = require('./controllers/EstabelecimentoCategoriaController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');

const routes = express.Router();

routes.get('/', (request, response) => {
    return response.send('Hello World!!!');
});

// Categoria de Estabelecimentos
routes.get('/estabelecimentos/categorias', EstabelecimentoCategoriaController.index);
routes.post('/estabelecimentos/categorias', EstabelecimentoCategoriaController.store);

// Estabelecimentos
routes.get('/estabelecimentos', EstabelecimentoController.index);
routes.post('/estabelecimentos', EstabelecimentoController.store);
routes.get('/estabelecimentos/imagem/:imagem', EstabelecimentoController.getImagem);


module.exports = routes;