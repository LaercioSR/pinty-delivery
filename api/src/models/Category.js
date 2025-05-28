const { Model, DataTypes } = require("sequelize");

class Category extends Model {
  static init(database) {
    super.init(
      {
        description: DataTypes.STRING,
      },
      {
        sequelize: database,
        tableName: "categories",
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Establishment, {
      foreignKey: "category_id",
      as: "establishment",
    });
  }
}

module.exports = Category;
