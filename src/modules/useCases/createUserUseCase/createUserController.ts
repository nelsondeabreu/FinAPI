import { Request, Response } from "express";
import { CreateUseUserCase } from "./createUserUseCase";


class CreateUserController {
    constructor(private createUserUseCase: CreateUseUserCase) {}
    handle(request: Request , response:Response){
        const {name , cpf}= request.body
        this.createUserUseCase.execute({name , cpf})

        return response.status(201).json({message: "user created with succeful"})
    }

}

export { CreateUserController }