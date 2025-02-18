import { Request, Response } from "express";
import { BalanceUseCase } from "./balanceUseCase";



class BalanceController {
    constructor(private balanceUsecase: BalanceUseCase) {}

    handle(request: Request , response: Response){
        const {cpf}= request.body
        const balance = this.balanceUsecase.execute(cpf);
        return response.status(200).json(balance)
    }
}

export { BalanceController }