const EstablishmentController = require("../src/controllers/EstablishmentController");
const Category = require("../src/models/Category");
const Establishment = require("../src/models/Establishment");

jest.mock("../src/models/Establishment");
jest.mock("../src/models/Category");

const responseMock = {
  json: jest.fn(),
};

const EstablishmentModelMock = {
  create: jest.fn(),
  findAll: jest.fn(() => []),
};

const CategoryModelMock = {
  findByPk: jest.fn((id) => ({
    id,
    description: "Test Category",
  })),
};

describe("EstablishmentController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Category.mockImplementation(() => CategoryModelMock);
    Establishment.mockImplementation(() => EstablishmentModelMock);
  });

  it("should create a new establishment and return it", async () => {
    const establishmentData = {
      name: "Test Establishment",
      about: "This is a test establishment",
      address: "Rua A, nº 0",
      whatsapp: "99 99999-9999",
      email: "email@example.com",
      category_id: 1,
    };

    const request = {
      body: establishmentData,
    };

    await EstablishmentController.store(request, responseMock);

    expect(Establishment.create).toHaveBeenCalledWith(establishmentData);
  });

  it("should return all establishments", async () => {
    const request = {};
    await EstablishmentController.index(request, responseMock);

    expect(Establishment.findAll).toHaveBeenCalled();
  });
});
