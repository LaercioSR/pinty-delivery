const { CategoryService } = require("../services");

module.exports = {
  async index(request, response) {
    const categories = await CategoryService.listCategories();

    return response.json(categories);
  },

  async store(request, response) {
    const { description } = request.body;

    const category = await CategoryService.create({ description });

    return response.json(category);
  },
};
