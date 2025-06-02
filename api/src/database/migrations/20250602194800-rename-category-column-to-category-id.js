"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "establishments",
      "category",
      "category_id"
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      "establishments",
      "category_id",
      "category"
    );
  },
};
