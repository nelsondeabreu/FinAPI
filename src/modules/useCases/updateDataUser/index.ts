import { userRepository } from "../indexGlobalRepository";
import { UpdateDataUserUseCase } from "./updateDataUserUseCase"
import { UpdateDataUserController } from "./updateDataUserController"

const updateDataUserUseCase = new UpdateDataUserUseCase(userRepository)
const updateDataUserController = new UpdateDataUserController(updateDataUserUseCase)

export {updateDataUserController}