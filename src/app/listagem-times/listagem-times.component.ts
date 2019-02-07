import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs';
import{ map } from 'rxjs/operators';
import {Jogador} from '../models/jogador';
import {Time} from '../models/time';
import {TIME} from '../../environments/endpoints';
import {Router} from '@angular/router';

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

  constructor(private request : RequestService, private router: Router) { }

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
    this.router.navigate(['listar-jogador',info])
  }

 

  deleteTime(id){
    console.log(id)
    this.request.delete(TIME,JSON.stringify(id)).toPromise().then(
      ()=>{
        this.getTimes()
      }
    )
  }

    
}
