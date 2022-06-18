import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Produto } from '../interfaces/Produto';

@Injectable({
  providedIn: 'root'
})
export class ListProdutosService {

  private apiUrl = 'https://retroflix.herokuapp.com/produtos';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]>{

    return this.http.get<Produto[]>(this.apiUrl);

  }
  
}
