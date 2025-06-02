const EstablishmentService = require("../services/EstablishmentService");

module.exports = {
  async index(request, response) {
    const establishments = await EstablishmentService.listEstablishments();

    return response.json(establishments);
  },

  async store(request, response) {
    const { name, about, address, image, whatsapp, email, category_id } =
      request.body;

    const establishment = await EstablishmentService.createEstablishment({
      name,
      about,
      address,
      image,
      whatsapp,
      email,
      category_id,
    });

    return response.json(establishment);
  },
};
