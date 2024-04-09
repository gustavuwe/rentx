import { Category } from '../../model/Category'
import { ICategoriesRepository, ICreateCategoryDTO } from '../ICategoriesRepository';

// DTO => Data transfer object

class CategoriesRepository implements ICategoriesRepository {
    private categories: Category[];

    // singleton pattern - utilizado para instanciar uma classe geral, nesse caso também garante que meu this.categories = [] não resete
    // pois não preciso usar new CategoriesRepository() toda vez que for utilizar o repositorio em outro arquivo

    private static INSTANCE: CategoriesRepository;

    private constructor() {
        this.categories = []
    }

    public static getInstance(): CategoriesRepository {
        if (!CategoriesRepository.INSTANCE) { // tem uma instancia criada?
            CategoriesRepository.INSTANCE = new CategoriesRepository();// não -> crio uma nova
        }
        // else
        return CategoriesRepository.INSTANCE // sim -> repasso
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category() 
    
        Object.assign(category, {
            name,
            description,
            created_at: new Date()
        })
    
        this.categories.push(category)
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category {
        const category = this.categories.find(category => category.name === name)
        return category;
    }
}

export { CategoriesRepository }