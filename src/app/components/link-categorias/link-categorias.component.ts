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
    { "id" : "2","name" : "Ação", "link" : "Ação"  },
    { "id" : "3","name" : "Aventura", "link" : "Aventura"  },
    { "id" : "4","name" : "Policial ", "link" : "Policial" },
    { "id" : "5","name" : "Romance", "link" : "Romance"  },
    { "id" : "6","name" : "Comédia" , "link" : "Comédia" },
    { "id" : "7","name" : "Drama" , "link" : "Drama" },
    { "id" : "8","name" : "Séries", "link" : "Séries" },
    { "id" : "9","name" : "Família" , "link" : "Família" },
    { "id" : "10","name" : "Suspense" , "link" : "Suspense" },
    { "id" : "11","name" : "Terror" , "link" : "Terror" },
    { "id" : "12","name" : "Ficção Científica" , "link" : "Ficção Cientifica" },
    { "id" : "13","name" : "Musical ", "link" : "Musical" }

  ]

  constructor(listProdutoService : ListProdutosService) {
   }

  ngOnInit(): void {
  }

  pageTitulo(){}


}
