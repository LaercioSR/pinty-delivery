const {
  EstablishmentRepository,
  CategoryRepository,
} = require("../src/repositories");
const { EstablishmentService } = require("../src/services");

jest.mock("../src/repositories/EstablishmentRepository");

describe("EstablishmentService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new establishment and return it", async () => {
    const establishmentData = {
      name: "Establishment Test",
      about: "This is a test establishment",
      address: "Street A, nº 1",
      whatsapp: "99 99999-9999",
      email: "email@example.com",
      category_id: 1,
    };
    const newEstablishment = { id: 1, ...establishmentData };
    EstablishmentRepository.create.mockResolvedValue(newEstablishment);
    CategoryRepository.findById = jest.fn().mockResolvedValue({
      id: 1,
      description: "Test Category",
    });

    const result =
      await EstablishmentService.createEstablishment(establishmentData);

    expect(EstablishmentRepository.create).toHaveBeenCalledWith(
      establishmentData
    );
    expect(result).toEqual(newEstablishment);
  });

  it("should throw an error if category does not exist", async () => {
    const establishmentData = {
      name: "Establishment Test",
      about: "This is a test establishment",
      address: "Street A, nº 1",
      whatsapp: "99 99999-9999",
      email: "email@example.com",
      category_id: 1,
    };
    const newEstablishment = { id: 1, ...establishmentData };
    EstablishmentRepository.create.mockResolvedValue(newEstablishment);
    CategoryRepository.findById = jest.fn().mockResolvedValue(undefined);

    await expect(
      EstablishmentService.createEstablishment(establishmentData)
    ).rejects.toThrow("Categoria não encontrada");
    expect(CategoryRepository.findById).toHaveBeenCalledWith(1);
    expect(EstablishmentRepository.create).not.toHaveBeenCalled();
  });

  it("should throw an error if required fields are missing", async () => {
    await expect(EstablishmentService.createEstablishment({})).rejects.toThrow(
      "Todos os campos são obrigatórios"
    );
    expect(EstablishmentRepository.create).not.toHaveBeenCalled();
    expect(CategoryRepository.findById).not.toHaveBeenCalled();
  });

  it("should list all establishments with image URLs", async () => {
    const establishmentsMock = [
      {
        name: "Establishment 1",
        about: "This is establishment 1",
        address: "Address 1",
        whatsapp: "99 99999-9999",
        email: "establishment1@test.com",
        category: {
          description: "Category 1",
        },
        image: "test_image.png",
      },
      {
        name: "Establishment 2",
        about: "This is establishment 2",
        address: "Address 2",
        whatsapp: "99 99999-9999",
        email: "establishment2@test.com",
        category: {
          description: "Category 2",
        },
      },
    ];
    const establishmentsResult = [
      {
        name: "Establishment 1",
        about: "This is establishment 1",
        address: "Address 1",
        whatsapp: "99 99999-9999",
        email: "establishment1@test.com",
        category: "Category 1",
        image_url: "/uploads/establishment_images/test_image.png",
      },
      {
        name: "Establishment 2",
        about: "This is establishment 2",
        address: "Address 2",
        whatsapp: "99 99999-9999",
        email: "establishment2@test.com",
        category: "Category 2",
        image_url: "/uploads/default.png",
      },
    ];

    EstablishmentRepository.findAll.mockResolvedValue(establishmentsMock);
    const result = await EstablishmentService.listEstablishments();
    expect(EstablishmentRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(establishmentsResult);
  });
});
