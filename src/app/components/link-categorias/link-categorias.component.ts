import { Component, OnInit,Output, Input } from '@angular/core';
import { CategoriasProdutos } from 'src/app/interfaces/CategoriasProdutos';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-link-categorias',
  templateUrl: './link-categorias.component.html',
  styleUrls: ['./link-categorias.component.css']
})
export class LinkCategoriasComponent implements OnInit {


  categorias : CategoriasProdutos[] = [

    { "id" : "1","name" : "Melhores Avaliados", "link" : "the-best" },
    { "id" : "2","name" : "Ação", "link" : "the-best"  },
    { "id" : "3","name" : "Aventura", "link" : "the-best"  },
    { "id" : "4","name" : "Policial ", "link" : "the-best" },
    { "id" : "5","name" : "Romance", "link" : "the-best"  },
    { "id" : "6","name" : "Comédia" , "link" : "the-best" },
    { "id" : "7","name" : "Drama" , "link" : "the-best" },
    { "id" : "8","name" : "Séries ", "link" : "the-best" },
    { "id" : "9","name" : "Família" , "link" : "the-best" },
    { "id" : "10","name" : "Suspense" , "link" : "the-best" },
    { "id" : "11","name" : "Terror" , "link" : "the-best" },
    { "id" : "12","name" : "Ficção Científica" , "link" : "the-best" },
    { "id" : "13","name" : "Musical ", "link" : "the-best" }

  ]

  constructor(listProdutoService : ListProdutosService) {
   }

  ngOnInit(): void {
  }

  pageTitulo(){}


}
