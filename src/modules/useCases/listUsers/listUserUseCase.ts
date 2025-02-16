import { IUserRepository } from "../../repositories/IuserRepositories";

class ListUsersUseCase {
    constructor(private listUsers: IUserRepository) {}
    execute(){
        const getAll = this.listUsers.getAll()

        if (getAll.length === 0) {
            throw new Error("Users not found!");
        }
        return getAll;
    }
}

export { ListUsersUseCase };