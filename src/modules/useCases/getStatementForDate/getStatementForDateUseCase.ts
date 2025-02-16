import { UserRepository } from "../../repositories/UserRepositories";


class GetStatementForDateUseCase{
    constructor(private userRepository: UserRepository){}

    execute(cpf: string , date: string){
        const user = this.userRepository.findByCpf(cpf)

        if(!user) throw new Error("User not found.")

        const statement = user.statement.find( state => state.created_at === date )

        if(!statement) throw new Error("Statement not found.")

        return statement
        
    }
}

export {GetStatementForDateUseCase}