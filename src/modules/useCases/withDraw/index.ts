import { userRepository } from "../indexGlobalRepository";
import { WithDrawUseCase } from "./withDrawUseCase";
import { WithDrawController } from "./withDrawController";

const withdrawUseCase = new WithDrawUseCase(userRepository)
const withdrawController = new WithDrawController(withdrawUseCase)

export { withdrawController }