import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  newUser : Login = new Login()
  
  constructor() { }
  private users : Array<Login> = [
    {email : 'adm@adm', senha: '123'},{email:'admin', senha :'1234'}
  ]
  createUser(){
    
    this.users.push(this.newUser);
    console.log('ok')
    console.log(this.users)
  }

  ngOnInit() {
  }

}