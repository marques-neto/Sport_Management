import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import {JOGADOR} from '../../environments/endpoints';

@Component({
  selector: 'app-listagem-jogadores',
  templateUrl: './listagem-jogadores.component.html',
  styleUrls: ['./listagem-jogadores.component.css']
})
export class ListagemJogadoresComponent implements OnInit {
  jogadores : Array<any>
  userFilter: any = {nome : ''}

  constructor(private request : RequestService) { }

  ngOnInit() {
    this.getJogadores()
  }
  getJogadores(){
    this.request.getAll(JOGADOR).subscribe(data =>{
      this.jogadores = data
    })
  }

}
