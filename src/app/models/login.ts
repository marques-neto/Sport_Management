export class Login{
     id? : string;
     email : string;
     senha: string;
    constructor(email,senha){
        this.email = email;
        this.senha = senha;
    }
}