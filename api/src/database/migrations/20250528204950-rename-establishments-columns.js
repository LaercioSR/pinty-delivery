"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .renameColumn("establishments", "nome", "name")
      .then(() => {
        return queryInterface.renameColumn("establishments", "sobre", "about");
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "endereco",
          "address"
        );
      })
      .then(() => {
        return queryInterface.renameColumn("establishments", "imagem", "image");
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "categoria_id",
          "category"
        );
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "solicitacao",
          "request_status"
        );
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .renameColumn("establishments", "name", "nome")
      .then(() => {
        return queryInterface.renameColumn("establishments", "about", "sobre");
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "address",
          "endereco"
        );
      })
      .then(() => {
        return queryInterface.renameColumn("establishments", "image", "imagem");
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "category",
          "categoria_id"
        );
      })
      .then(() => {
        return queryInterface.renameColumn(
          "establishments",
          "request_status",
          "solicitacao"
        );
      });
  },
};
