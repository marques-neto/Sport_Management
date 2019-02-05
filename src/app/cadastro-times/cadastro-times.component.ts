import { TIME } from './../../environments/endpoints';
import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-times',
  templateUrl: './cadastro-times.component.html',
  styleUrls: ['./cadastro-times.component.css']
})
export class CadastroTimesComponent implements OnInit {
  time: any = { name: '' };

  constructor(private request : RequestService) { }

  ngOnInit() {
  }

  cadastrarTime(){

    this.request.post(TIME,this.time
    ).subscribe(data => {})
    
    alert('Salvo com sucesso !')
  }


}
