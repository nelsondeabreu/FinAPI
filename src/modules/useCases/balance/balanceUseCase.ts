import { UserRepository } from "../../repositories/UserRepositories";


class BalanceUseCase {
    constructor(private userRepository: UserRepository) {}

    execute(cpf: string){
        const user = this.userRepository.findByCpf(cpf);
        console.log(cpf);
        
        if(!user) {
            throw new Error("User not found!");
        }
        return user.balance;
    }
}

export { BalanceUseCase }