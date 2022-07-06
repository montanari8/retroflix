import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroProdutosComponent } from '../components/formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { NovoProdutoComponent } from '../components/pages/novo-produto/novo-produto.component';
import { PrivacidadeComponent } from '../components/pages/privacidade/privacidade.component';
import { PrateleirasIniciaisComponent } from '../components/prateleiras-iniciais/prateleiras-iniciais.component';
import { SobreComponent } from '../components/sobre/sobre.component';
import { CategoriasComponent } from '../components/pages/categorias/categorias.component'; // Página Categoria
import { CategoriaComponent } from '../components/pages/categoria/categoria.component';
import { ProdutoComponent } from '../components/pages/produto/produto.component';
import { ContatoComponent } from '../components/pages/contato/contato.component';
import { PoliticaReembolsoComponent } from '../components/pages/politica-reembolso/politica-reembolso.component';

const routes: Routes = [
  /* Menu Componente Header */
  {path: '', component: PrateleirasIniciaisComponent},
  {path: 'categorias', component: CategoriasComponent},
  {path: 'sobre', component: SobreComponent},

  /* Menu Componente Footer */
  {path: 'cadastrar-produto', component: NovoProdutoComponent},
  {path: 'privacidade', component: PrivacidadeComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'politica-reembolso', component: PoliticaReembolsoComponent},

  /* Componentes Link Categoria */
  {path: 'the-best', component: CategoriaComponent},

  /* Página Produto */
  {path: 'produto/:id', component: ProdutoComponent},

  {path: 'categoria/:categoria', component: CategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
