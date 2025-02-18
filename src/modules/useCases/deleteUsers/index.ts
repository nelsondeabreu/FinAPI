import { userRepository } from "../indexGlobalRepository";
import { DeleteUsersUseCase } from "./deleteUsersUseCase";
import { DeleteUsersController } from "./deleteUsersController";

const deleteUsersUseCase = new DeleteUsersUseCase(userRepository);

const deleteUsersController = new DeleteUsersController(deleteUsersUseCase);

export { deleteUsersController };