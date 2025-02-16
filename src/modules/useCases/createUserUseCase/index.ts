import { userRepository } from "../indexGlobalRepository";
import { CreateUseUserCase } from "./createUserUseCase";
import { CreateUserController } from "./createUserController";

const createUserUseCase = new CreateUseUserCase(userRepository)
const createUserController = new CreateUserController(createUserUseCase) 

export {createUserController}