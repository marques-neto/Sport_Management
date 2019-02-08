
import { Component, OnInit } from '@angular/core';
import { Service } from '../../generic.service';
import { TIME } from '../../../environments/endpoints';
import { Time } from '../../models/time';



@Component({
  selector: 'app-cadastro-times',
  templateUrl: './cadastro-times.component.html',
  styleUrls: ['./cadastro-times.component.css']
})
export class CadastroTimesComponent implements OnInit {
  time : Time = new Time()

  constructor(private request : Service) { }

  ngOnInit() {
  }

  cadastrarTime(){
    this.request.post(TIME,this.time
    ).subscribe(data => {})
    alert('Salvo com sucesso !')
  }


}
