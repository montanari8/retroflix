import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
import {Produto} from 'src/app/interfaces/Produto';
import { ListProdutosService } from 'src/app/services/list-produtos.service';

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.css']
})
export class SwiperExampleComponent implements OnInit {
/*
  produtos : Produto[] = [

    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {enderecoImagem: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {enderecoImagem: "thumb-1920-1108220.jpg", titulo: "The Godfather", subtitulo: "Poderoso Chefão"}

  ]
*/
produtos : Produto[] = [];

  constructor(private listProdutosService: ListProdutosService) { 

    this.getProdutos();

  }

  ngOnInit(): void {


  }
  
  getProdutos(): void{
    this.listProdutosService.getAll().subscribe((produto) => (this.produtos = produto));
    console.log(this.listProdutosService.getAll().subscribe((produto) => (this.produtos = produto)));
  }

  
}
