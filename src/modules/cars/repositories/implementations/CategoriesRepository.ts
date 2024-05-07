import AppDataSource from '../../../../database';
import { Category } from '../../entities/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';
import { Repository } from "typeorm"

// DTO => Data transfer object

class CategoriesRepository implements ICategoriesRepository {
    private repository: Repository<Category>

    // singleton pattern - utilizado para instanciar uma classe geral, nesse caso também garante que meu this.categories = [] não resete
    // pois não preciso usar new CategoriesRepository() toda vez que for utilizar o repositorio em outro arquivo

    private static INSTANCE: CategoriesRepository;

    constructor() {
        this.repository = AppDataSource.getRepository(Category)
    }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({
            description,
            name
        })
    
        await this.repository.save(category)
    }

    async list(): Promise<Category[]> {
        const categories = await this.repository.find()
        return categories;
    }

    async findByName(name: string): Promise<Category> {
        // Select * from categories where name = "name" limit 1
        const category = await this.repository.findOne(
            {   where:
                    { name: name }
            }
        )
        return category;
    }
}

export { CategoriesRepository }