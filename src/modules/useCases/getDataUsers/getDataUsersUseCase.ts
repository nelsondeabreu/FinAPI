import { UserRepository } from "../../repositories/UserRepositories"


class GetDataUsersUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(cpf: string) {
        const user = this.userRepository.findByCpf(cpf)
        if (!user) throw new Error("User not found.")

        const {id,statement,... user_data} = user
        return user_data;
    }
}

export { GetDataUsersUseCase }