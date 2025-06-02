const { Category } = require("../models");

class CategoryRepository {
  constructor() {
    this.model = Category;
  }

  async create({ description }) {
    return this.model.create({ description });
  }

  async findAll() {
    return this.model.findAll();
  }

  async findById(id) {
    return this.model.findByPk(id);
  }
}

module.exports = new CategoryRepository();
