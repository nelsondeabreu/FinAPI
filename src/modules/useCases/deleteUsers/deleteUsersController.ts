import { Request, Response } from "express";
import { DeleteUsersUseCase } from "./deleteUsersUseCase";

class DeleteUsersController {
    constructor(private deleteUsersUseCase: DeleteUsersUseCase) {}

    handle(request: Request, response: Response) {
        const { cpf } = request.body;
        this.deleteUsersUseCase.execute(cpf);
        return response.status(200).json({error: "user deletet with succeful."});
    }
}

export { DeleteUsersController };