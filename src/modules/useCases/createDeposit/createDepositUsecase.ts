import { UserRepository } from "../../repositories/UserRepositories";

interface IStatement{
    cpf: string,
    amount: number,
    description: string
}


class CreateDeposituseCase {
    constructor(private userRepository: UserRepository) {}
    
    execute({cpf , amount , description}: IStatement){
        const user = this.userRepository.findByCpf(cpf)
        
        if (!user) {
            throw new Error("user not found!");
            
        }
        user.statement.push({
            amount,
            description,
            type: "credit",
            created_at: new Date().toLocaleDateString()
        })
        user.balance += amount
    }
}

export {CreateDeposituseCase}