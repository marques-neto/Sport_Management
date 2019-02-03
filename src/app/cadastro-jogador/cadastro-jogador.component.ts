import { JogadorService } from './jogador.service';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.css'],
  providers: [JogadorService]
})
export class CadastroJogadorComponent implements OnInit {

  jogadorForm: FormGroup
  jogador: any
  id:any 

  constructor(private fb: FormBuilder,
     private service: JogadorService) { 

    this.jogadorForm = this.fb.group({
      nome: this.fb.control(''),
      nascimento: this.fb.control(''),
      mae: this.fb.control(''),
      pai: this.fb.control(''),
      rg: this.fb.control(''),
      time: this.fb.control(''),
      endereco: this.fb.control(''),
      observacao: this.fb.control(''),
    })
  }

  ngOnInit() {
  }

cadastraJogador(){

  let jogador = this.jogadorForm.getRawValue()
  this.service.cadastra('jogadores', jogador).subscribe(
    response => console.log(response)
    ,error => console.log(error)
  );  
}


consultaJogador(){
  if(this.id){

    this.service.getById('jogadores', this.id).subscribe(res => this.jogador = res)
  }
}

}
