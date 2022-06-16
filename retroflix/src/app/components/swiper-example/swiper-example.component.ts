import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);


@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: ['./swiper-example.component.css']
})
export class SwiperExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
