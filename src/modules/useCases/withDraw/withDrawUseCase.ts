import { UserRepository } from "../../repositories/UserRepositories";
interface Iwithdraw{
    cpf: string,
    amount: number,
    description: string,
}


class WithDrawUseCase {
    constructor(private userRepository: UserRepository) {}
    execute({cpf ,description, amount}: Iwithdraw){
        const user = this.userRepository.findByCpf(cpf)
        if(!user) {
            throw new Error("User not found!");
        }
        if(user.balance < amount) throw new Error("Insufficient balance")
            
        user.statement.push({
            amount,
            description,
            type: "debit",
            created_at: new Date().toLocaleDateString()
        })
        user.balance -= amount
    }
}

export {WithDrawUseCase}