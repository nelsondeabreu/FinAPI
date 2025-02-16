import { UserRepository } from "../../repositories/UserRepositories";
import { BalanceUseCase } from "./balanceUseCase";
import { BalanceController } from "./balanceController";

const userRepository = new UserRepository();
const balanceUseCase = new BalanceUseCase(userRepository);

const balanceController = new BalanceController(balanceUseCase);

export { balanceController };