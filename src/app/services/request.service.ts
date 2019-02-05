
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from'rxjs';
import {API_URL} from 'src/environments/endpoints'


@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }
  
  

  getAll(endpoint: string): Observable<any>{
    return this.http.get(`${API_URL}/${endpoint}`);
  }

  getById(endpoint: string, id: string): Observable<any>{
    return this.http.get(`${API_URL}/${endpoint}/${id}`);
  }

  post(endpoint: string, jogador: object): Observable<any>{
    return this.http.post(`${API_URL}/${endpoint}`, jogador);
  }

  put(endpoint: string, id: string, jogador: object): Observable<any>{
    return this.http.post(`${API_URL}/${endpoint}/${id}`, jogador);
  }
  delete(endpoint: string, id: string): Observable<any>{
    return this.http.delete(`${API_URL}/${endpoint}/${id}`)
  }

}
