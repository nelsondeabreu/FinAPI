import { Request, Response, Router } from "express";
import { createUserController } from "../modules/useCases/createUserUseCase";
import { listUsersControllers } from "../modules/useCases/listUsers";
import { getStatementController } from "../modules/useCases/getStatement/index";
import { createDepositController } from "../modules/useCases/createDeposit/index";
import { withdrawController } from "../modules/useCases/withDraw";
import { balanceController } from "../modules/useCases/balance";

const userRouter = Router()

userRouter.post("/", (request: Request , response: Response):any=>{
    return createUserController.handle(request, response);
})

userRouter.get("/users", (request: Request , response: Response):any=>{
    return listUsersControllers.handle(request, response);
})

userRouter.get("/statement", (request: Request , response: Response):any=>{
    return getStatementController.handle(request, response);
})

userRouter.post("/deposit", (request: Request , response: Response):any=>{
    return createDepositController.handle(request, response);
})

userRouter.post("/withdraw", (request: Request , response: Response):any=>{
    return withdrawController.handle(request, response);
})

userRouter.get("/balance", (request: Request , response: Response):any=>{
    return balanceController.handle(request, response);
})

export {userRouter};