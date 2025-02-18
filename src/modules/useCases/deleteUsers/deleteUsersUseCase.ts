import { UserRepository } from "../../repositories/UserRepositories";



class DeleteUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(cpf: string){
        this.userRepository.deleteByCpf(cpf)
    }
}

export { DeleteUsersUseCase }