"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "categories",
      "descricao",
      "description"
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "categories",
      "description",
      "descricao"
    );
  },
};
