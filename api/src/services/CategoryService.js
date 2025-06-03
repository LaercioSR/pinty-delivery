const { CategoryRepository } = require("../repositories");

class CategoryService {
  async createCategory({ description }) {
    const desc = String(description || "").trim();

    if (!desc) {
      throw new Error("A descrição da categoria é obrigatória");
    }

    return CategoryRepository.create({ description: desc });
  }

  async listCategories() {
    return CategoryRepository.findAll();
  }

  async getCategoryById(id) {
    if (!id) {
      throw new Error("O ID da categoria é obrigatório");
    }

    const category = await CategoryRepository.findById(id);

    if (!category) {
      throw new Error("Categoria não encontrada");
    }

    return category;
  }
}

module.exports = new CategoryService();
