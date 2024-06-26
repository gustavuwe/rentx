import { container } from "tsyringe"

import { ICategoriesRepository } from "../../modules/cars/repositories/ICategoriesRepository"
import { CategoriesRepository } from "../../modules/cars/repositories/implementations/CategoriesRepository"

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", // nome que vai ser chamado no @inject e então irá referenciar a classe abaixo
    CategoriesRepository
)