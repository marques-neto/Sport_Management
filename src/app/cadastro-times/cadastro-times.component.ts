import { TIME } from './../../environments/endpoints';
import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import { Time } from '../models/time';

@Component({
  selector: 'app-cadastro-times',
  templateUrl: './cadastro-times.component.html',
  styleUrls: ['./cadastro-times.component.css']
})
export class CadastroTimesComponent implements OnInit {
  time : Time = new Time()

  constructor(private request : RequestService) { }

  ngOnInit() {
  }

  cadastrarTime(){
    this.request.post(TIME,this.time
    ).subscribe(data => {})
    alert('Salvo com sucesso !')
  }


}
