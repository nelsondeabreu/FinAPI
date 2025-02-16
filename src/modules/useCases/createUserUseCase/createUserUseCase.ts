import { IUserRepository } from "../../repositories/IuserRepositories";
interface IRequest{
    name: string,
    cpf: string,
}

class CreateUseUserCase {
    constructor(private userRepository: IUserRepository){}

    execute({name , cpf}: IRequest){
        const userAlreadyExist = this.userRepository.findByCpf(cpf)
        if(userAlreadyExist) throw new Error('User already exists')

        this.userRepository.create({name, cpf})
    }
}


export {CreateUseUserCase}