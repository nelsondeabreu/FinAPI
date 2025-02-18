import {UpdateDataUserUseCase} from "./updateDataUserUseCase"
import { Request, Response } from "express";

class UpdateDataUserController{
    constructor(private updateDataUserUseCase: UpdateDataUserUseCase){}

    handle(request: Request , response: Response){
        const {cpf , name} = request.body
        this.updateDataUserUseCase.execute(cpf , name)
        return response.status(200).send()
    }
}

export {UpdateDataUserController}