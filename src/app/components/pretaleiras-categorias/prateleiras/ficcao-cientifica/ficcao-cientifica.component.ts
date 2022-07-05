import { Component, OnInit } from '@angular/core';
import { ListProdutosComponent } from 'src/app/components/list-produtos/list-produtos.component';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-ficcao-cientifica',
  templateUrl: './ficcao-cientifica.component.html',
  styleUrls: ['./ficcao-cientifica.component.css']
})
export class FiccaoCientificaComponent implements OnInit {

  produto?: Produto[]

  constructor(
    private listService : ListProdutosService,
  ) {
    this.getProduto()
  }

  ngOnInit(): void {
  }

  getProduto(){      
    return this.listService.getCategoria('Ficção Cientifica').subscribe((produto) => (this.produto = produto)); 
  }

  
}