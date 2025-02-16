interface IUserRepositoryDTO{
    name: string;
    cpf: string;
}


interface IUserRepository{
    create({name , cpf}): void;
    findByCpf(cpf: string): IUserRepositoryDTO;
    updateName({cpf , name}: IUserRepositoryDTO): void;
    deleteByCpf(cpf: string): void;
    getAll(): IUserRepositoryDTO[];
}

export {IUserRepository , IUserRepositoryDTO};