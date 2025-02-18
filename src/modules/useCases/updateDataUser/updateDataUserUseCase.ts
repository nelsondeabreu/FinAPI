import { UserRepository } from "../../repositories/UserRepositories";



class UpdateDataUserUseCase{
    constructor(private userRepository: UserRepository ){}

    execute(cpf: string , name: string){
        const user = this.userRepository.findByCpf(cpf)

        if(!user) throw new Error("user not found.")

        Object.assign(user , { name })
    }
}


export {UpdateDataUserUseCase}