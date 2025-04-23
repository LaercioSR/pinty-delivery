const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const EstabelecimentoCategoria = require('../models/EstabelecimentoCategoria');
const Estabelecimento = require('../models/Estabelecimento');

const database = new Sequelize(dbConfig);

EstabelecimentoCategoria.init(database);
Estabelecimento.init(database);

Estabelecimento.associate(database.models);
EstabelecimentoCategoria.associate(database.models);

module.exports = database;