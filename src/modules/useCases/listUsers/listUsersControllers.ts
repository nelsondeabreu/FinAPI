import { Request, Response } from "express";
import { ListUsersUseCase } from "./listUserUseCase";



class ListUsersController {
    constructor(private listUsersUseCase: ListUsersUseCase) {}

    handle(request: Request , response: Response){
        const users = this.listUsersUseCase.execute();
        
        return response.status(200).send(users);
    }
}

export { ListUsersController };