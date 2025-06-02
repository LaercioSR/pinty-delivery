const { CategoryRepository } = require("../src/repositories");
const { CategoryService } = require("../src/services");

jest.mock("../src/repositories/CategoryRepository");

describe("CategoryService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new category and return it", async () => {
    const categoryData = { description: "Pizzeria" };
    const newCategory = { id: 1, ...categoryData };
    CategoryRepository.create.mockResolvedValue(newCategory);

    const result = await CategoryService.createCategory(categoryData);

    expect(CategoryRepository.create).toHaveBeenCalledWith(categoryData);
    expect(result).toEqual(newCategory);
  });

  it("should throw an error if description is missing", async () => {
    const categoryData = {};

    await expect(CategoryService.createCategory(categoryData)).rejects.toThrow(
      "A descrição da categoria é obrigatória"
    );

    expect(CategoryRepository.create).not.toHaveBeenCalled();
  });

  it("should list all categories", async () => {
    const categories = [
      { id: 1, description: "Pizzeria" },
      { id: 2, description: "Sushi Bar" },
    ];
    CategoryRepository.findAll.mockResolvedValue(categories);

    const result = await CategoryService.listCategories();

    expect(CategoryRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(categories);
  });
});
