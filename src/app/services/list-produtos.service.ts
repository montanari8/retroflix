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


  private produtos : Produto[] = []

  private headers = new HttpHeaders()
  .set('content-type','application/json')
  .set('Access-Control-Allow-Origin', '*/*');  
  

  constructor(private http: HttpClient) { }

  getAll(): Observable<Produto[]>{

    return this.http.get<Produto[]>(this.endPointReqProdutos);

  }
 
  createProduto2(formData: FormData):Observable<FormData>{
    
   return this.http.post<FormData>(this.endPointCreateProdutos,JSON.stringify(this.produtos),{'headers':this.headers})
  }

  createProduto(formData: FormData):Observable<FormData>{

    const headers = {
      "content-type" : "application/json"
    }

    const body =  

      {
        "id" : null,
        "titulo" : "The Karate Kid", 
        "subtitulo": "A Hora da Verdade",
        "descricao": null,
        "enderecoImagem": "https://br.web.img3.acsta.net/c_310_420/pictures/210/195/21019546_20130715144612222.jpg",
        "valor": "valor",
        "quantidade": "quantidade",
        "produtora": "produtora",
        "distribuidora": "PAM filmes",
        "tradutora": "tradutora",
        "fornecedor": "fornecedor",
        "direcao": "Milton Amaral",
        "producao": null,
        "elenco": "Amácio Mazzaropi, Geny Prado, Ana Maria Nabuco",
        "dataLancamento": "1959",
        "critica": null,
        "sinopse": "Zacarias (Mazzaropi) e a mulher vão à cidade para ajudar o filho que quer ser médico. Lá ele resolve trabalhar como chofer de táxi.",
        "trailer": "https://www.youtube.com/watch?v=GCMXbY8A8Yw"
      }
  
    
    
    return this.http.post<any>('https://retroflix.herokuapp.com/produtos',body)
   }

   getItem(id: string): Observable<Produto>{

      return this.http.get<Produto>('https://retroflix.herokuapp.com/produtos/id/'+id)
    
   }

   getCategoria(categoria : string): Observable<Produto[]>{

    return this.http.get<Produto[]>(this.endPointReqProdutos+'/'+categoria);

  }


}
