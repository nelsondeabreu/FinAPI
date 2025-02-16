import { userRepository } from "../indexGlobalRepository";
import { ListUsersUseCase } from "./listUserUseCase";
import { ListUsersController } from "./listUsersControllers"

const listUsersUseCase = new ListUsersUseCase(userRepository)
const listUsersControllers = new ListUsersController(listUsersUseCase)

export { listUsersUseCase, listUsersControllers }