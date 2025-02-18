import { userRepository } from "../indexGlobalRepository";
import { BalanceUseCase } from "./balanceUseCase";
import { BalanceController } from "./balanceController";

const balanceUseCase = new BalanceUseCase(userRepository);

const balanceController = new BalanceController(balanceUseCase);

export { balanceController };