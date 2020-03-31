const { Model, DataTypes } = require('sequelize');

class Estabelecimento extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.STRING,
            sobre: DataTypes.STRING(1024),
            horario_funcionamento: DataTypes.STRING,
            endereco: DataTypes.STRING,
            foto: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            // categoria_id: DataTypes.INTEGER,
        }, {
            sequelize: database,
            tableName: 'estabelecimentos',
        });
    }

    static associate(models) {
        this.belongsTo(models.EstabelecimentoCategoria, { foreignKey: 'categoria_id', as: 'categoria' });
    }
}

module.exports = Estabelecimento;