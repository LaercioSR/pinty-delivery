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
        type: Sequelize.TEXT,
      },
      endereco: {
        type: Sequelize.STRING,
      },
      imagem: {
        type: Sequelize.STRING,
      },
      whatsapp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
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
      solicitacao: {
        type: Sequelize.CHAR(1),
        allowNull: false,
        defaultValue: 'N',
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
