import { UserRepository } from "../../repositories/UserRepositories";


class GetStatementUseCase {
    constructor(private userRepository: UserRepository) {}
    execute(cpf: string){
        const user = this.userRepository.findByCpf(cpf)
        if(!user) {
            throw new Error("User not found!");
        }
        return user.statement
    }
}

export {GetStatementUseCase}