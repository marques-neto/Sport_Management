
import { Component, OnInit } from '@angular/core';
import { Service } from '../../generic.service';
import { TIME } from '../../../environments/endpoints';


@Component({
  selector: 'app-cadastro-times',
  templateUrl: './cadastro-times.component.html',
  styleUrls: ['./cadastro-times.component.css']
})
export class CadastroTimesComponent implements OnInit {
  time: any = { name: '' };

  constructor(private request : Service) { }

  ngOnInit() {
  }

  cadastrarTime(){

    this.request.post(TIME,this.time
    ).subscribe(data => {})
    
    alert('Salvo com sucesso !')
  }


}
