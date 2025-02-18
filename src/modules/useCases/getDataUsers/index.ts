import { userRepository } from "../indexGlobalRepository";
import { GetDataUsersUseCase } from "./getDataUsersUseCase";
import { GetDataUserController } from "./getDataUsersController";

const getDataUsersUseCase = new GetDataUsersUseCase(userRepository);

const getDataUsersController = new GetDataUserController(getDataUsersUseCase);

export { getDataUsersController };