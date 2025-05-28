const express = require("express");

// const multer = require('multer');
// const multerConfig = require('./config/multer');

const CategoryController = require("./controllers/CategoryController");
const EstablishmentController = require("./controllers/EstablishmentController");

const routes = express.Router();

routes.get("/", (request, response) => {
  return response.send("Hello World!!!");
});

// Establishments Categories
routes.get("/establishments/categories", CategoryController.index);
routes.post("/establishments/categories", CategoryController.store);

// Establishments
routes.get("/establishments", EstablishmentController.index);
routes.post("/establishments", EstablishmentController.store);

module.exports = routes;
