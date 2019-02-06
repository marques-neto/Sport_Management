
import { Component, OnInit } from '@angular/core';
import{ Observable } from 'rxjs';
import{ map } from 'rxjs/operators';


import { Service } from '../../generic.service';
import { TIME } from '../../../environments/endpoints';


@Component({
  selector: 'app-listagem-times',
  templateUrl: './listagem-times.component.html',
  styleUrls: ['./listagem-times.component.css']
})
export class ListagemTimesComponent implements OnInit {
  times : Array<any>
  userFilter: any = {name: ''}

  constructor(private request : Service) { }

  ngOnInit() {
    this.getTimes()
  }

  getTimes(){
    this.request.getAll(TIME).subscribe(data =>{
      this.times= data
    })
  }

  addTime(){
    
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
