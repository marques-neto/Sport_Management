import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Route } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login : FormGroup;
  alert: string;

  constructor(private auth: AuthService, private form: FormBuilder, private rout: Route) { }

  ngOnInit() {
    this.login = this.form.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      pass: ['', Validators.compose([Validators.required])]
    })}

    submit(){
      if(this.login.valid){
        this.auth.login(this.login.getRawValue()).toPromise().then(
          (res)=>{   // resposta booleana definida no auth service método login 
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
        this.showMessage('Preencha os campos corretamente!')
      }
    }
  
    /**
     * Método para mostrar o alert na tela
     * @param message 
     */
    showMessage(alert){
      this. alert= alert;
      
     
  }
  

}
