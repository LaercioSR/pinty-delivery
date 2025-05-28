"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          description: "Lanchonete",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Padaria",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Supermercado",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Pizzaria",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Restaurante",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Saúde",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: "Outro",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  },
};
