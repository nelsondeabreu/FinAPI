import { userRepository } from "../indexGlobalRepository";
import { CreateDepositController } from "./createDepositController";
import { CreateDeposituseCase } from "./createDepositUsecase";

const createDepositUsecase = new CreateDeposituseCase(userRepository)
const createDepositController = new CreateDepositController(createDepositUsecase)

export {createDepositController}