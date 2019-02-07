import { Injectable } from '@angular/core';
import { Login } from './models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private users : Array<Login> = [
    {email : 'adm@adm', senha: '123'},{email:'admin', senha :'1234'}
  ]
  createUser(login){
    this.users.push(login);
  }
  constructor() { 
    console.log(this.users)
  }
  /**
   * A simple method to check if the user exist the users list
   * @param user 
   */
  isValid(user : Login){
    let result : boolean = false 
    this.users.forEach(element=>{
      if(element.email == user.email && element.senha == user.senha){
        result = true
      }
    })
    return result
  }

}


