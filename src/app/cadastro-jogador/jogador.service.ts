import { Service } from '../generic.service'
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private service: Service) { }


  getAll(endPoint: string){
    this.service.getAll(endPoint);
  }

  getById(endPoint: string, id: string){
    this.service.getById(endPoint, id);
  }

  post(endPoint: string, jogador: object){
    this.service.post(endPoint, jogador);
  }

  put(endPoint: string, id: string, jogador: object){
    this.service.put(endPoint,id, jogador);
  }

  delete(endPoint: string, id: string){
    this.service.delele(endPoint, id);
  }

}