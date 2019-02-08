
import { Component, OnInit } from '@angular/core';
import { Service } from '../../generic.service';
import { TIME } from '../../../environments/endpoints';

import {Router} from '@angular/router';
import { Time } from '../../models/time';
import { Jogador } from '../../models/jogador';

@Component({
  selector: 'app-listagem-times',
  templateUrl: './listagem-times.component.html',
  styleUrls: ['./listagem-times.component.css']
})
export class ListagemTimesComponent implements OnInit {
  times : Array<any> = new Array<any>();
  time : Time
  jogador: Jogador = new Jogador();
  userFilter: any = {nome: ''}

  constructor(private request : Service, private router: Router) { }

  ngOnInit() {
    this.getTimes()
  }

  getTimes(){
    this.request.getAll(TIME).subscribe(data =>{
      this.times= data
    })
  }
  detailTime(time){
    let info = {key : time.id, nome: time.nome}
    this.router.navigate(['listar-jogadores',info])
  }

  deleteTime(id){
    console.log(id)
    this.request.delele(TIME,JSON.stringify(id)).toPromise().then(
      ()=>{
        this.getTimes()
      }
    )
  }

    
}
