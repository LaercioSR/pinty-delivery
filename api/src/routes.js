const express = require("express");

// const multer = require('multer');
// const multerConfig = require('./config/multer');

const CategoryController = require("./controllers/CategoryController");
const EstablishmentController = require("./controllers/EstablishmentController");

const routes = express.Router();
// const upload = multer(multerConfig);

routes.get("/", (request, response) => {
  return response.send("Hello World!!!");
});

// Categoria de Estabelecimentos
routes.get("/estabelecimentos/categorias", CategoryController.index);
routes.post("/estabelecimentos/categorias", CategoryController.store);

// Estabelecimentos
routes.get("/estabelecimentos", EstablishmentController.index);
routes.post("/estabelecimentos", EstablishmentController.store);
// routes.post('/estabelecimentos', upload.single('imagem'), EstablishmentController.store);

module.exports = routes;
