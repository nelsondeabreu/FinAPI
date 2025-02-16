import { userRepository } from "../indexGlobalRepository";
import {GetStatementForDateUseCase} from "./getStatementForDateUseCase"
import {GetStatementForDateController} from "./getStatementForDateController"



const getStatementForDateUseCase = new GetStatementForDateUseCase(userRepository)
const getStatementForDateController = new GetStatementForDateController(getStatementForDateUseCase)

export {getStatementForDateController}