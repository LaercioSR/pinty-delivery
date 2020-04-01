'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('estabelecimento_categorias', [
      { descricao: 'Lanchonete', created_at: new Date(), updated_at: new Date() },
      { descricao: 'Padaria' , created_at: new Date(), updated_at: new Date() },
      { descricao: 'Supermercado' , created_at: new Date(), updated_at: new Date() },
      { descricao: 'Pizzaria' , created_at: new Date(), updated_at: new Date() },
      { descricao: 'Restaurante' , created_at: new Date(), updated_at: new Date() },
      { descricao: 'Saúde' , created_at: new Date(), updated_at: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
  }
};
