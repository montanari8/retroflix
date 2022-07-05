import { Component, OnInit } from '@angular/core';
import { ListProdutosComponent } from 'src/app/components/list-produtos/list-produtos.component';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {

  produto?: Produto[]
  
  constructor(
    private listService : ListProdutosService,
  ) { 
    this.getProduto()
  }

  ngOnInit(): void {
  }

  getProduto(){      
    return this.listService.getCategoria('Séries').subscribe((produto) => (this.produto = produto)); 
  }
}
