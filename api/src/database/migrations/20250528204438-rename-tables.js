"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .renameTable("estabelecimentos", "establishments")
      .then(() => {
        return queryInterface.renameTable(
          "estabelecimento_categorias",
          "categories"
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .renameTable("establishments", "estabelecimentos")
      .then(() => {
        return queryInterface.renameTable(
          "categories",
          "estabelecimento_categorias"
        );
      });
  },
};
