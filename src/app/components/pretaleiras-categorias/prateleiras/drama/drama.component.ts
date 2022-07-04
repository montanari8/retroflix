import { Component, OnInit } from '@angular/core';
import { ListProdutosComponent } from 'src/app/components/list-produtos/list-produtos.component';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-drama',
  templateUrl: './drama.component.html',
  styleUrls: ['./drama.component.css']
})
export class DramaComponent implements OnInit {

  produto?: Produto[]
  
  constructor(
    private listService : ListProdutosService,
  ) {
    this.getProduto()
  }

  ngOnInit(): void {
  }

  getProduto(){      
    return this.listService.getAll().subscribe((produto) => (this.produto = produto)); 
  }
}