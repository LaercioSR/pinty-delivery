const Category = require("../models/Category");

module.exports = {
  async index(request, response) {
    const categories = await Category.findAll({
      attributes: ["id", "description"],
    });

    return response.json(categories);
  },

  async store(request, response) {
    const { description } = request.body;

    const category = await Category.create({
      description,
    });

    return response.json(category);
  },
};
