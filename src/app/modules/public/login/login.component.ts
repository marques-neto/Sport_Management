import { AuthService } from 'src/app/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  newUser : Login = new Login();
 
  constructor(private auth : AuthService, private route : Router) { }

  ngOnInit(){

  }
  
  login(){
      if(this.validateInfo() && this.auth.isValid(this.newUser)){
        this.route.navigate(['home'])
      }else{
        window.alert('Usuário ou senha incorretos')
      }
    }

  
  validateInfo() : boolean{
    if(this.newUser.email == '' || this.newUser.senha == ''){
      return false
    }
    else{
      return true
    }
    
  }


}