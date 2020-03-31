'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('estabelecimentos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sobre: {
        type: Sequelize.STRING(1024),
      },
      horario_funcionamento: {
        type: Sequelize.STRING,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      foto: {
        type: Sequelize.STRING,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoria_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'estabelecimento_categorias'
          },
          key: 'id',
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('estabelecimentos');
  }
};
