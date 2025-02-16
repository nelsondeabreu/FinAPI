import { WithDrawUseCase } from "./withDrawUseCase";
import { Request, Response } from "express";



class WithDrawController {
    constructor(private withdrawUseCase: WithDrawUseCase) {}

    handle(request: Request, response: Response) {
        const { cpf,description, amount } = request.body;
        this.withdrawUseCase.execute({ cpf, amount , description});

        return response.status(200).send();
    
    }
}

export { WithDrawController };