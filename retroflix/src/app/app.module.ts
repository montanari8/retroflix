import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from "@angular/forms";
import { CommonModule } from '@angular/common';
import { SwiperModule } from "swiper/angular";



import { AppRoutingModule } from './services/app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { FooterComponentComponent } from './components/footer-component/footer-component.component';
import { PrateleirasIniciaisComponent } from './components/prateleiras-iniciais/prateleiras-iniciais.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { SwiperExampleComponent } from './components/swiper-example/swiper-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PrateleirasIniciaisComponent,
    SobreComponent,
    SwiperExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
