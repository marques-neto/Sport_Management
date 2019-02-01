import { RequestService } from './../services/request.service';
import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import {Team} from '../models/team';
import {TIME} from '../../environments/endpoints';

@Component({
  selector: 'app-listagem-times',
  templateUrl: './listagem-times.component.html',
  styleUrls: ['./listagem-times.component.css']
})
export class ListagemTimesComponent implements OnInit {
  times : Array<any>

  constructor(private request : RequestService) { }

  ngOnInit() {

    this.request.getAll(TIME).subscribe(data =>{
      this.times= data
    })
  }

  addTime(){
    
  }

}
