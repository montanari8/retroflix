import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { FormsModule, ReactiveFormsModule } from "@angular/forms";
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
import { ListProdutosComponent } from './components/list-produtos/list-produtos.component';
import { FormularioCadastroProdutosComponent } from './components/formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { NovoProdutoComponent } from './components/pages/novo-produto/novo-produto.component';
import { PrivacidadeComponent } from './components/pages/privacidade/privacidade.component';
import { CategoriasComponent } from './components/pages/categorias/categorias.component';
import { ContatoComponent } from './components/pages/contato/contato.component';
import { PoliticaReembolsoComponent } from './components/pages/politica-reembolso/politica-reembolso.component';
import { ProdutoComponent } from './components/pages/produto/produto.component';
import { CarrinhoDeCompraComponent } from './components/pages/carrinho-de-compra/carrinho-de-compra.component';
import { FinalizaCompraComponent } from './components/pages/finaliza-compra/finaliza-compra.component';
import { CadastroUsuarioComponent } from './components/pages/cadastro-usuario/cadastro-usuario.component';
import { AtualizaCadastroComponent } from './components/pages/atualiza-cadastro/atualiza-cadastro.component';
import { LoginComponent } from './components/pages/login/login.component';
import { LinkCategoriasComponent } from './components/link-categorias/link-categorias.component';
import { PretaleirasCategoriasComponent } from './components/pretaleiras-categorias/pretaleiras-categorias.component';
import { MelhoresComponent } from './components/pretaleiras-categorias/prateleiras/melhores/melhores.component';
import { AventuraComponent } from './components/pretaleiras-categorias/prateleiras/aventura/aventura.component';
import { RomanceComponent } from './components/pretaleiras-categorias/prateleiras/romance/romance.component';
import { DramaComponent } from './components/pretaleiras-categorias/prateleiras/drama/drama.component';
import { FamiliaComponent } from './components/pretaleiras-categorias/prateleiras/familia/familia.component';
import { TerrorComponent } from './components/pretaleiras-categorias/prateleiras/terror/terror.component';
import { MusicalComponent } from './components/pretaleiras-categorias/prateleiras/musical/musical.component';
import { AcaoComponent } from './components/pretaleiras-categorias/prateleiras/acao/acao.component';
import { PolicialComponent } from './components/pretaleiras-categorias/prateleiras/policial/policial.component';
import { ComediaComponent } from './components/pretaleiras-categorias/prateleiras/comedia/comedia.component';
import { SeriesComponent } from './components/pretaleiras-categorias/prateleiras/series/series.component';
import { SuspenseComponent } from './components/pretaleiras-categorias/prateleiras/suspense/suspense.component';
import { FiccaoCientificaComponent } from './components/pretaleiras-categorias/prateleiras/ficcao-cientifica/ficcao-cientifica.component';
import { CategoriaComponent } from './components/pages/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    PrateleirasIniciaisComponent,
    SobreComponent,
    SwiperExampleComponent,
    ListProdutosComponent,
    FormularioCadastroProdutosComponent,
    NovoProdutoComponent,
    PrivacidadeComponent,
    CategoriasComponent,
    ContatoComponent,
    PoliticaReembolsoComponent,
    ProdutoComponent,
    CarrinhoDeCompraComponent,
    FinalizaCompraComponent,
    CadastroUsuarioComponent,
    AtualizaCadastroComponent,
    LoginComponent,
    LinkCategoriasComponent,
    PretaleirasCategoriasComponent,
    MelhoresComponent,
    AventuraComponent,
    RomanceComponent,
    DramaComponent,
    FamiliaComponent,
    TerrorComponent,
    MusicalComponent,
    AcaoComponent,
    PolicialComponent,
    ComediaComponent,
    SeriesComponent,
    SuspenseComponent,
    FiccaoCientificaComponent,
    CategoriaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    SwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
