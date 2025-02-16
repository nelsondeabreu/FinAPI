import { userRepository } from "../indexGlobalRepository";
import { GetStatementController } from "./getStatementController";
import { GetStatementUseCase } from "./getStatementUseCase";

const getStatementUseCase = new GetStatementUseCase(userRepository)
const getStatementController = new GetStatementController(getStatementUseCase)

export {getStatementController}