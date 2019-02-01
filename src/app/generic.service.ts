import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class Service {

  constructor(private http: HttpClient) { }


  getAll(endpoint: string){
    return this.http.get(`${environment.API_URL}/${endpoint}`);
  }

  getById(endpoint: string, id: string){
    return this.http.get(`${environment.API_URL}/${endpoint}/${id}`);
  }

  post(endpoint: string, jogador: object){
    return this.http.post(`${environment.API_URL}/${endpoint}`, jogador);
  }

  put(endpoint: string, id: string, jogador: object){
    return this.http.post(`${environment.API_URL}/${endpoint}/${id}`, jogador);
  }

}
