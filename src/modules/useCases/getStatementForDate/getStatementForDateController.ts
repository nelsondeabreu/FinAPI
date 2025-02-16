import {GetStatementForDateUseCase} from "./getStatementForDateUseCase"
import { Request, Response } from "express";


class GetStatementForDateController{
    constructor(private getStatementForDateUseCase: GetStatementForDateUseCase){}

    handle(request: Request , response: Response){
        const {cpf , date} = request.body

        const statementFordate = this.getStatementForDateUseCase.execute(cpf , date)

        return response.status(200).json(statementFordate)
    }
}

export {GetStatementForDateController}