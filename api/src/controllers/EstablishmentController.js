const EstablishmentService = require("../services/EstablishmentService");

module.exports = {
  async index(request, response) {
    try {
      const establishments = await EstablishmentService.listEstablishments();
      return response.json(establishments);
    } catch (error) {
      console.error("Erro ao listar estabelecimentos:", error);
      return response
        .status(500)
        .json({ error: "Erro ao buscar estabelecimentos." });
    }
  },

  async store(request, response) {
    try {
      const { name, about, address, image, whatsapp, email, category_id } =
        request.body;

      if (!name || !address || !category_id) {
        return response.status(400).json({
          error:
            "Campos obrigatórios ausentes: 'name', 'address' e 'category_id'.",
        });
      }

      const establishment = await EstablishmentService.createEstablishment({
        name,
        about,
        address,
        image,
        whatsapp,
        email,
        category_id,
      });

      return response.status(201).json(establishment);
    } catch (error) {
      console.error("Erro ao criar estabelecimento:", error);
      return response
        .status(500)
        .json({ error: "Erro ao criar estabelecimento." });
    }
  },
};
