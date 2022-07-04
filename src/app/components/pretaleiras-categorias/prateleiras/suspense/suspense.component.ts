import { Component, OnInit } from '@angular/core';
import { ListProdutosComponent } from 'src/app/components/list-produtos/list-produtos.component';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-suspense',
  templateUrl: './suspense.component.html',
  styleUrls: ['./suspense.component.css']
})
export class SuspenseComponent implements OnInit {

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
