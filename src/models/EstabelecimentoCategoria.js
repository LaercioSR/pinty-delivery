const { Model, DataTypes } = require('sequelize');

class EstabelecimentoCategoria extends Model {
    static init(database) {
        super.init({
            descricao: DataTypes.STRING,
        }, {
            sequelize: database,
            tableName: 'estabelecimento_categorias',
        });
    }

    static associate(models) {
        this.hasMany(models.Estabelecimento, { foreignKey: 'categoria_id', as: 'estabelecimentos' });
    }
}

module.exports = EstabelecimentoCategoria;