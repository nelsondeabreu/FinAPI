import { v4 as uuidv4 } from "uuid"


class User {
    id?: string 
    name: string
    cpf: string
    balance: number = 0;
    statement: { 
        amount: number; 
        description: string; 
        type: "credit" | "debit"; 
        created_at: string;
    }[] = [];// <-- Agora o TypeScript sabe que é um array de objetos do tipo correto!


    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
    }
}

export {User};