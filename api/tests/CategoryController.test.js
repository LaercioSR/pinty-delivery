const CategoryController = require("../src/controllers/CategoryController");
const Category = require("../src/models/Category");

jest.mock("../src/models/Category");

const responseMock = {
  json: jest.fn(),
};

const categoryModelMock = {
  create: jest.fn(),
  findAll: jest.fn(),
};

describe("CategoryController", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    Category.mockImplementation(() => categoryModelMock);
  });

  it("should create a new category and return it", async () => {
    const request = {
      body: { description: "Test Category" },
    };

    await CategoryController.store(request, responseMock);

    expect(Category.create).toHaveBeenCalledWith({
      description: "Test Category",
    });
  });

  it("should return all categories", async () => {
    const request = {};
    await CategoryController.index(request, responseMock);

    expect(Category.findAll).toHaveBeenCalled();
  });
});
