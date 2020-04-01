const { Model, DataTypes } = require('sequelize');

class Estabelecimento extends Model {
    static init(database) {
        super.init({
            nome: DataTypes.STRING,
            sobre: DataTypes.TEXT,
            horario_funcionamento: DataTypes.STRING,
            endereco: DataTypes.STRING,
            imagem: DataTypes.STRING,
            whatsapp: DataTypes.STRING,
            solicitacao: DataTypes.CHAR(2),
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