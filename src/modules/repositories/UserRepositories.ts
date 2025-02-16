import { User } from "../models/user";
import { IUserRepository , IUserRepositoryDTO} from "./IuserRepositories";



class UserRepository implements IUserRepository {
    private user: User[]
    constructor(){
        this.user = [];
    }

    create({ name, cpf }: IUserRepositoryDTO): void {
        const user = new User()
        Object.assign(user, {
            name,
            cpf,
        })
        this.user.push(user);
    }
    findByCpf(cpf: string): User {
        return this.user.find(user => user.cpf === cpf);
    }
    deleteByCpf(cpf: string): void {
        this.user = this.user.filter(user => user.cpf!== cpf);
    }
    getAll(): User[] {
        return [...this.user];
    }

    updateName({cpf , name}: IUserRepositoryDTO): void {
        const user = this.findByCpf(cpf);
        if(user){
            user.name = name;
        }
    }
   
}

export { UserRepository };