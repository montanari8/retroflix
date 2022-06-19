import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Produto } from '../interfaces/Produto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListProdutosService {

  private baseapiUrl = environment.baseapiUrl; /* URL API */
  private endPointReqProdutos = `${this.baseapiUrl}produtos` /* Método GET */
  private endPointCreateProdutos = `${this.baseapiUrl}produtos` /* Método POST */

  private produtos : Produto[] = [

    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},

  ]

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]>{

    return this.http.get<Produto[]>(this.endPointReqProdutos);

  }
 /*
  createProduto(formData: FormData):Observable<FormData>{
   return this.http.post<FormData>(this.endPointCreateProdutos,formData)
  }*/

  createProduto(t: any){
    return this.http.post<Produto>(this.endPointCreateProdutos,this.produtos)
  }
  
}
