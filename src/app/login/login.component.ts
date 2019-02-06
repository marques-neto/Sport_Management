import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  alert: string;
  visualAlert: boolean  = false;

  constructor(private auth: AuthService, private form: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.login = this.form.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])]
    })}

    submit(){
      if(this.login.valid){
        this.auth.login(this.login.getRawValue()).toPromise().then(
          (res)=>{ 
            if(res){
              console.log('Login is Success!!')
              this.route.navigate(['home'])    
            }
            else{
              this.showMessage('Usuário ou Senha Inválidos!')
            }
          }
        )
      }else{
        this.showMessage('Preencha os campos')
      }
    }
  
    
    showMessage(alert){
      this.alert = alert;
      this.visualAlert = !this.visualAlert
      setTimeout(() => {
         this.visualAlert = !this.visualAlert
      }, 5000);
    }
  LogOn(){
  this.route.navigate(['home']);
  }
  

}
