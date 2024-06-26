import { Response, Request } from "express"

import { container } from "tsyringe"

import { CreateCategoryUseCase } from "./CreateCategoryUseCase"

// Controller -> responsável por receber a request e enviar de volta a response, como uma espécie de rota

class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, description } = request.body;

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

        await createCategoryUseCase.execute({ name, description })

        return response.status(201).send();
    }
}

export { CreateCategoryController }