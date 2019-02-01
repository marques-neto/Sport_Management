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

  constructor(private fb: FormBuilder,
     private service: JogadorService) { 

    this.jogadorForm = this.fb.group({
      nome: this.fb.control(''),
      dataNascimento: this.fb.control(''),
      nomeDaMae: this.fb.control(''),
      nomeDoPai: this.fb.control(''),
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
  this.service.getById('jogadores', '1').subscribe(res => this.jogador = res)
}

}
