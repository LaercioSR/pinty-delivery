const fs = require("node:fs/promises");
const path = require("node:path");
const crypto = require("crypto");
const {
  CategoryRepository,
  EstablishmentRepository,
} = require("../repositories");

class EstablishmentService {
  async createEstablishment(data) {
    const requiredFields = ["name", "about", "address", "category_id"];

    for (const field of requiredFields) {
      if (!data[field]) {
        throw new Error("Todos os campos são obrigatórios");
      }
    }

    // Verifica se a categoria existe
    const category = await CategoryRepository.findById(data.category_id);
    if (!category) {
      throw new Error("Categoria não encontrada");
    }

    let image_name;

    if (data.image) {
      image_name = await this.#saveImage(data.image);
    }

    return EstablishmentRepository.create({
      ...data,
      image: image_name,
    });
  }

  async listEstablishments() {
    const establishments = await EstablishmentRepository.findAll();

    return establishments.map((est) => {
      const imagePath = est.image
        ? `/uploads/establishment_images/${est.image}`
        : `/uploads/default.png`;

      return {
        name: est.name,
        about: est.about,
        address: est.address,
        whatsapp: est.whatsapp,
        email: est.email,
        category: est.category.description,
        image_url: (process.env.APP_URL || "") + imagePath,
      };
    });
  }

  async getEstablishmentById(id) {
    if (!id) {
      throw new Error("ID do estabelecimento é obrigatório");
    }

    const establishment = await EstablishmentRepository.findById(id);

    if (!establishment) {
      throw new Error("Estabelecimento não encontrado");
    }

    return establishment;
  }

  async #saveImage(base64Image) {
    try {
      const imageBuffer = Buffer.from(
        base64Image.replace(/^data:image\/png;base64,/, ""),
        "base64"
      );
      const imageName = crypto.randomBytes(8).toString("hex") + ".png";
      const filePath = path.join(
        "public",
        "uploads",
        "establishment_images",
        imageName
      );

      await fs.writeFile(filePath, imageBuffer);
      return imageName;
    } catch (error) {
      console.error("Erro ao salvar imagem:", error);
      throw new Error("Falha ao processar a imagem");
    }
  }
}

module.exports = new EstablishmentService();
