import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produto?:  Produto[]

  public id = this.route.snapshot.paramMap.get('id')

  public categoria = "Comédia"


  //produto?:  Produto

  constructor(
    private listService : ListProdutosService, 
    private route : ActivatedRoute
    ) {
      this.getProduto()
      
     }

  ngOnInit(): void {
  }

 /*
  getProduto(){//Carregar da API apenas um item
    const id = this.route.snapshot.paramMap.get("id")
    console.log('VALOR DE ID '+id)
    if(id){      

      this.listService.getItem(id).subscribe((produto) => (this.produto = produto))
      
    }
  }
  */

  
  getProduto(){      
      return this.listService.getAll().subscribe((produto) => (this.produto = produto)); 
  }
  

}
