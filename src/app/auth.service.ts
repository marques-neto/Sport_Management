import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Login } from './models/login';
import { ServiceLoginService } from './service-login.service';
import { USER } from 'src/environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http : ServiceLoginService) { }
  login(user : Login){
    return this.http.get(USER).pipe(map(
      (res : Array<Login>)=>{
        let result = false
        for (let i = 0; i < res.length; i++) {
          if(res[i].email === user.email && res[i].senha === user.senha) { 
            localStorage.setItem("user", JSON.stringify(res[i].id))
            result = true
          }
        }
        return result
        }
      )
    )
  }
  isLogged(): boolean{
    return this.getId() == null? false : true;
  }
  getId(){
    return localStorage.getItem("login")
  }
  logOut(){
    localStorage.removeItem("login")
  }
}

