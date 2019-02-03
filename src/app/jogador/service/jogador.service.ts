
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from '../../generic.service';
import { JOGADORES } from '../../../environments/endpoints';

@Injectable({
  providedIn: 'root'
})
export class JogadorService {

  constructor(private service: Service) { }


  getAll(): Observable<any>{
    return this.service.getAll(JOGADORES);
  }

  getById(id: string): Observable<any>{
    return this.service.getById(JOGADORES, id);
  }

  cadastra(jogador: object): Observable<any>{
    return this.service.post(JOGADORES, jogador);
  }

  altera(id: string, jogador: object): Observable<any>{
    return this.service.put(JOGADORES,id, jogador);
  }

  exclui(id: string): Observable<any>{
    return this.service.delele(JOGADORES, id);
  }

}