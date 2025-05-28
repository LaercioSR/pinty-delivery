const { Model, DataTypes } = require("sequelize");

class Establishment extends Model {
  static init(database) {
    super.init(
      {
        name: DataTypes.STRING,
        about: DataTypes.TEXT,
        email: DataTypes.STRING,
        address: DataTypes.STRING,
        image: DataTypes.STRING,
        whatsapp: DataTypes.STRING,
        request_status: DataTypes.CHAR(1),
      },
      {
        sequelize: database,
        tableName: "establishments",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Category, {
      foreignKey: "category_id",
      as: "category",
    });
  }
}

module.exports = Establishment;
