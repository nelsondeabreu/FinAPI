import { Request, Response } from "express";
import { CreateDeposituseCase } from "./createDepositUsecase";



class CreateDepositController {
    constructor(private createDeposituseCase: CreateDeposituseCase) {}

    handle(request: Request , response: Response){
        const {cpf , amount , description} = request.body

        this.createDeposituseCase.execute({cpf , amount , description})
        
        return response.status(200).json({message: "Deposit made successfully "})
    }
}

export {CreateDepositController}