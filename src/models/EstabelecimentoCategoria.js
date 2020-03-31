const { Model } = require('sequelize');
const Sequelize = require('sequelize');

class EstabelecimentoCategoria extends Model {
    static init(database) {
        super.init({
            descricao: Sequelize.STRING,
        }, {
            sequelize: database,
            modelName: 'estabelecimento_categorias',
        });
    }
}

module.exports = EstabelecimentoCategoria;