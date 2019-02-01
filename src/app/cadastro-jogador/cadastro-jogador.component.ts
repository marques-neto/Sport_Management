import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms'
@Component({
  selector: 'app-cadastro-jogador',
  templateUrl: './cadastro-jogador.component.html',
  styleUrls: ['./cadastro-jogador.component.css']
})
export class CadastroJogadorComponent implements OnInit {

  jogadorForm: FormGroup

  constructor(private fb: FormBuilder) { 
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

}
