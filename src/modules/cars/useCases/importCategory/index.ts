import { ImportCategoryUseCase } from "./ImportCategoryUseCase";
import { ImportCategoryController } from "./importCategoryController";
import { CategoriesRepository } from "../../repositories/implementations/CategoriesRepository";

const categoriesRepository = null;
const importCategoryUseCase = new ImportCategoryUseCase(categoriesRepository);

const importCategoryController = new ImportCategoryController(
    importCategoryUseCase,
);

export { importCategoryController }