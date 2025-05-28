const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Category = require("../models/Category");
const Establishment = require("../models/Establishment");

const database = new Sequelize(dbConfig);

Category.init(database);
Establishment.init(database);

Establishment.associate(database.models);
Category.associate(database.models);

module.exports = database;
