import { Request, Response } from "express";
import { GetStatementUseCase } from "./getStatementUseCase";



class GetStatementController {
    constructor(private getStatementUseCase: GetStatementUseCase) {}
    handle(request: Request , response: Response){
        const {cpf} = request.body
        const statement = this.getStatementUseCase.execute(cpf)

        return response.status(200).json(statement)
    }
}

export { GetStatementController }