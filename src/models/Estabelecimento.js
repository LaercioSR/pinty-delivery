const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class Estabelecimento extends Model {
    static init(database) {
        super.init({
            descricao: Sequelize.STRING,
            sobre: Sequelize.STRING(1024),
            horario_funcionamento: Sequelize.STRING,
            endereco: Sequelize.STRING,
            foto: Sequelize.STRING,
            whatsapp: Sequelize.STRING,
            categoria_id: Sequelize.INTEGER,
        }, {
            sequelize: database,
            modelName: 'estabelecimentos',
        });
    }
}

module.exports = Estabelecimento;