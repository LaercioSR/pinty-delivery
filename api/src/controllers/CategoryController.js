const { CategoryService } = require("../services");

module.exports = {
  async index(request, response) {
    try {
      const categories = await CategoryService.listCategories();
      return response.json(categories);
    } catch (error) {
      console.error("Erro ao listar categorias:", error);
      return response.status(500).json({ error: "Erro ao buscar categorias." });
    }
  },

  async store(request, response) {
    try {
      const { description } = request.body;

      if (!description || description.trim() === "") {
        return response.status(400).json({ error: "Descrição é obrigatória." });
      }

      const category = await CategoryService.create({ description });
      return response.status(201).json(category);
    } catch (error) {
      console.error("Erro ao criar categoria:", error);
      return response.status(500).json({ error: "Erro ao criar categoria." });
    }
  },
};
