import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  produtosCategoriaUm ?:  Produto[]
  produtosOutros?:  Produto[]
  produto?:  Produto

  public id ?: any

  constructor(
    private listService : ListProdutosService, 
    private route : ActivatedRoute,
    private el: ElementRef
    ) {

      this.getProduto()
      this.getCategoria()
      this.getOutros()

     }

  ngOnInit(): void {

    let style: string = `
    .section-default{
      background: linear-gradient(rgba(0, 0, 0, 1), rgba(10, 10, 10, 0.2), rgba(0, 0, 0, 0.9))
    }
    `
    this.createStyle(style)
    
  } 

  getProduto() {//Carregar da API apenas um item
    //const id = this.route.snapshot.paramMap.get("id")
    this.id = this.route.snapshot.paramMap.get("id")
    console.log('VALOR DE ID ' + this.id)
    if (this.id) {
      this.listService.getItem(this.id).subscribe((produto) => (
        this.produto = produto
        ))
    }   
   
  }

  getProdutoLoad(id:any) {//Carregar da API apenas um item
   
    console.log('VALOR DE ID ' + id)
    if (id) {
      this.listService.getItem(id).subscribe((produto) => (
        this.produto = produto
        ))
        scrollTo({ top: 0, behavior: 'smooth' })
        this.getCategoria()
    }   
   
  }

  getCategoria(){
    //const id = this.route.snapshot.paramMap.get("id")
    this.id = this.route.snapshot.paramMap.get("id")
    console.log('VALOR DE ID ' + this.id)
    if (this.id) {
      this.listService.getItem(this.id).subscribe((produto) => (
         //console.log('categoria é ' + produto.categoria?.slice(0,1))
          this.getPrimeiraCategoria(produto.categoria?.slice(0,1))
        ))
    }   
  }

  getPrimeiraCategoria(categoria:any){
    return this.listService.getCategoria(categoria).subscribe((produto) => (this.produtosCategoriaUm = produto));
  }

  getOutros(){
    return this.listService.getAll().subscribe((produto) => (this.produtosOutros = produto.sort().reverse().slice(0,15)));
  }
//.slice(0,1)
//


createStyle(style: string): void {
  const styleElement = document.createElement('style');
  styleElement.appendChild(document.createTextNode(style));
  this.el.nativeElement.appendChild(styleElement);
}



}
