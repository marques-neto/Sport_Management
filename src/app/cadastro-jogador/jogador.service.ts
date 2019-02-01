import { Service } from '../generic.service'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private service: Service) { }


  getAll(endPoint: string): Observable<any>{
    return this.service.getAll(endPoint);
  }

  getById(endPoint: string, id: string): Observable<any>{
    return this.service.getById(endPoint, id);
  }

  cadastra(endPoint: string, jogador: object): Observable<any>{
    return this.service.post(endPoint, jogador);
  }

  altera(endPoint: string, id: string, jogador: object): Observable<any>{
    return this.service.put(endPoint,id, jogador);
  }

  exclui(endPoint: string, id: string): Observable<any>{
    return this.service.delele(endPoint, id);
  }

}