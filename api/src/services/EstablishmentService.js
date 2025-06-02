const FileSystem = require("node:fs");
const Crypto = require("crypto");
const {
  CategoryRepository,
  EstablishmentRepository,
} = require("../repositories");

class EstablishmentService {
  async createEstablishment(data) {
    if (!data.name || !data.about || !data.address || !data.category_id) {
      throw new Error("Todos os campos são obrigatórios");
    }

    // Check if category exists
    const category = await CategoryRepository.findById(data.category_id);
    if (!category) {
      throw new Error("Categoria não encontrada");
    }

    let image_name = undefined;
    if (data.image) {
      // Save image to the file system
      image_name = Crypto.randomBytes(8).toString("HEX") + ".png";

      let base64_data = data.image.replace(/^data:image\/png;base64,/, "");
      FileSystem.writeFile(
        "public/uploads/establishment_images/" + image_name,
        base64_data,
        "base64",
        function (err) {
          console.log(err);
        }
      );
    }

    return EstablishmentRepository.create({
      ...data,
      image: image_name,
    });
  }

  async listEstablishments() {
    const establishments = await EstablishmentRepository.findAll();

    const establishmentsWithImageUrl = establishments.map((establishment) => {
      const linkImage = establishment.image
        ? "/uploads/establishment_images/" + establishment.image
        : "/uploads/default.png";
      return {
        name: establishment.name,
        about: establishment.about,
        address: establishment.address,
        whatsapp: establishment.whatsapp,
        email: establishment.email,
        category: establishment.category.description,
        image_url: (process.env.APP_URL ?? "") + linkImage,
      };
    });

    return establishmentsWithImageUrl;
  }

  async getEstablishmentById(id) {
    const establishment = await EstablishmentRepository.findById(id);
    if (!establishment) {
      throw new Error("Estabelecimento não encontrado");
    }
    return establishment;
  }
}

module.exports = new EstablishmentService();
