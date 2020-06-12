const express = require('express');

const multer = require('multer');
const multerConfig = require('./config/multer');

const EstabelecimentoCategoriaController = require('./controllers/EstabelecimentoCategoriaController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');

const routes = express.Router();
const upload = multer(multerConfig);

routes.get('/', (request, response) => {
    return response.send('Hello World!!!');
});

// Categoria de Estabelecimentos
routes.get('/estabelecimentos/categorias', EstabelecimentoCategoriaController.index);
routes.post('/estabelecimentos/categorias', EstabelecimentoCategoriaController.store);

// Estabelecimentos
routes.get('/estabelecimentos', EstabelecimentoController.index);
routes.post('/estabelecimentos', upload.single('imagem'), EstabelecimentoController.store);


module.exports = routes;