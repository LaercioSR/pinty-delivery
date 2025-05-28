const Establishment = require("../models/Establishment");
const Category = require("../models/Category");
const FileSystem = require("fs");
const Crypto = require("crypto");

module.exports = {
  async index(request, response) {
    const establishments = await Establishment.findAll({
      attributes: [
        "id",
        "name",
        "about",
        "address",
        "image",
        "whatsapp",
        "email",
      ],
      include: [
        {
          model: Category,
          as: "category",
          attributes: ["description"],
        },
      ],
      // where: { solicitacao: 'S' }
    });

    const establishmentsSelerializado = establishments.map((establishment) => {
      const linkImage = establishment.image
        ? "/uploads/establishment_images/" + establishment.image
        : "/uploads/default.png";
      return {
        id: establishment.id,
        name: establishment.name,
        about: establishment.about,
        address: establishment.address,
        whatsapp: establishment.whatsapp,
        email: establishment.email,
        category: establishment.category.description,
        image_url: process.env.APP_URL + linkImage,
      };
    });

    return response.json(establishmentsSelerializado);
  },

  async store(request, response) {
    const { name, about, address, image, whatsapp, email, category_id } =
      request.body;
    let image_name = "";

    const category = await Category.findByPk(category_id);

    if (!category) {
      return response.status(400).json({ error: "Categoria não encontrada" });
    }

    if (image) {
      image_name = Crypto.randomBytes(8).toString("HEX") + ".png";

      let base64_data = image.replace(/^data:image\/png;base64,/, "");
      FileSystem.writeFile(
        "public/uploads/establishment_images/" + image_name,
        base64_data,
        "base64",
        function (err) {
          console.log(err);
        }
      );
    }

    const establishment = await Establishment.create({
      name: name,
      about: about,
      address: address,
      image: image_name,
      whatsapp,
      email,
      category_id: category_id,
    });

    return response.json(establishment);
  },
};
