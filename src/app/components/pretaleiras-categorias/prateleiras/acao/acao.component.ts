import { Component, OnInit } from '@angular/core';
import {Produto} from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

@Component({
  selector: 'app-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.css']
})
export class AcaoComponent implements OnInit {
  produtos : Produto[] = [

    {enderecoImagem: "https://http2.mlstatic.com/D_NQ_NP_855671-MLB41261869266_032020-O.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/26/20172772.jpg", titulo: "Star Wars", subtitulo: "Episódio IV"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/15/20172684.jpg", titulo: "Indiana Jones e a Última Cruzada", subtitulo: ""},
    {enderecoImagem: "https://m.media-amazon.com/images/I/51YwXwjinwL.jpg", titulo: "Jornada nas Estrelas", subtitulo: "Séries"},
    {enderecoImagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/26/20172772.jpg", titulo: "Star Wars", subtitulo: "Episódio IV"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/15/20172684.jpg", titulo: "Indiana Jones e a Última Cruzada", subtitulo: ""},
    {enderecoImagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/26/20172772.jpg", titulo: "Star Wars", subtitulo: "Episódio IV"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/15/20172684.jpg", titulo: "Indiana Jones e a Última Cruzada", subtitulo: ""},
    {enderecoImagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Titanic_poster.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/26/20172772.jpg", titulo: "Star Wars", subtitulo: "Episódio IV"},
    {enderecoImagem: "https://br.web.img3.acsta.net/c_310_420/medias/nmedia/18/91/98/15/20172684.jpg", titulo: "Indiana Jones e a Última Cruzada", subtitulo: ""}

  ]
  


  constructor() { }

  ngOnInit(): void {
  }

}
