import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioCadastroProdutosComponent } from '../../formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-novo-produto',
  templateUrl: './novo-produto.component.html',
  styleUrls: ['./novo-produto.component.css']
})
export class NovoProdutoComponent implements OnInit {
  btnText: string = 'Enviar!';
  image?: File;

  constructor(
    private listProdutoService: ListProdutosService,
    private router: Router
    
  ) {}

  ngOnInit(): void {}

  
  createHandler( event: any){
    console.log('deu boa')
  }
  
  

}
