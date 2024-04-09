import { Response, Request } from "express"

import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

// Controller -> responsável por receber a request e enviar de volta a response, como uma espécie de rota

class CreateCategoryController {

    constructor(private createCategoryUseCase: CreateCategoryUseCase) {

    }

    handle(request: Request, response: Response) {
        const { name, description } = request.body;

        this.createCategoryUseCase.execute({ name, description })

        return response.status(201).send();
    }
}

export { CreateCategoryController }