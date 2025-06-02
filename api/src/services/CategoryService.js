const { CategoryRepository } = require("../repositories");

class CategoryService {
  async createCategory(data) {
    if (!data.description) {
      throw new Error("A descrição da categoria é obrigatória");
    }
    return CategoryRepository.create(data);
  }

  async listCategories() {
    return CategoryRepository.findAll();
  }

  async getCategoryById(id) {
    const category = await CategoryRepository.findById(id);
    if (!category) {
      throw new Error("Categoria não encontrada");
    }
    return category;
  }
}

module.exports = new CategoryService();
