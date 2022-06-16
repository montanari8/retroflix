import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";
import {Produto} from 'src/app/interfaces/Produto';

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.css']
})
export class SwiperExampleComponent implements OnInit {

  produtos : Produto[] = [

    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-739988.jpg", titulo: "The Karate Kid", subtitulo: "A Hora da Verdade"},
    {img: "thumb-1920-617213.jpg", titulo: "Titanic", subtitulo: "RMS Titanic"},
    {img: "thumb-1920-1108220.jpg", titulo: "The Godfather", subtitulo: "Poderoso Chefão"}

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
