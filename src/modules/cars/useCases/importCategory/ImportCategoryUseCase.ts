import { parse } from "csv-parse"
import fs from "fs";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IImportCategory {
    name: string;
    description: string;
}

class ImportCategoryUseCase {
    constructor(private categoriesRepository: ICategoriesRepository) {

    }
    loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> { // -> retorna um array
        return new Promise((resolve, reject) => {
            const stream = fs.createReadStream(file.path)

            const categories: IImportCategory[] = [];

            const parseFile = parse()

            stream.pipe(parseFile) // joga os chunks (pedaços) que vão sendo renderizados para o parseFile

            parseFile.on("data", async (line) => {
                const [name, description] = line
                categories.push({
                    name,
                    description
                })
            })
            .on("end", () => { // quando finalizar o parse do arquivo (callback)
                fs.promises.unlink(file.path)
                resolve(categories) //  ao finalizar quero que coloque dentro da minha promise o meu categories
            })
            .on("error", (err) => { // caso dê erro
                reject(err)
            })
        })
    }
    async execute(file: Express.Multer.File): Promise<void> {
        const categories = await this.loadCategories(file)
        


        categories.map(async (category) => {
            const { name, description } = category;

            const existCategory = this.categoriesRepository.findByName(name); // já existe a categoria?

            if(!existCategory) { // se não cria a categoria
                this.categoriesRepository.create({
                    name,
                    description,
                })
            }
        })
    }
}

export { ImportCategoryUseCase }