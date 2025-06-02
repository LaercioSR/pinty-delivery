// JavaScript: repositories/EstablishmentRepository.js
const { Establishment, Category } = require("../models");

class EstablishmentRepository {
  constructor() {
    this.model = Establishment;
  }

  async create(data) {
    return this.model.create(data);
  }

  async findAll() {
    return this.model.findAll({
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["description"],
        },
      ],
    });
  }

  async findById(id) {
    return this.model.findByPk(id);
  }
}

module.exports = new EstablishmentRepository();
