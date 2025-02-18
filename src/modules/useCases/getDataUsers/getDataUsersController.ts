import { Request, Response } from "express";
import { GetDataUsersUseCase } from "./getDataUsersUseCase";

class GetDataUserController {
    constructor(private getDataUsersUseCase: GetDataUsersUseCase) {}

    handle(request: Request , response: Response){
        const {cpf}= request.body
        const user = this.getDataUsersUseCase.execute(cpf)

        return response.status(200).json(user)
    }
}

export { GetDataUserController };