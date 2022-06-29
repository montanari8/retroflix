import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormularioCadastroProdutosComponent } from '../../formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { ListProdutosService } from 'src/app/services/list-produtos.service';
import { Produto } from 'src/app/interfaces/Produto';

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

  
  async createHandler( produto: Produto){


    console.log('creteHandler')

    const formData = new FormData

   // formData.append("titulo", produto.titulo)
    //formData.append("subtitulo", produto.subtitulo)
    /*
    if (produto.enderecoImagem){      
      formData.append('imagem', produto.enderecoImagem)
    }

    */

    await this.listProdutoService.createProduto(formData).subscribe()

  }
  
  

}
