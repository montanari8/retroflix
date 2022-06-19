import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioCadastroProdutosComponent } from '../components/formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { NovoProdutoComponent } from '../components/pages/novo-produto/novo-produto.component';
import { PrateleirasIniciaisComponent } from '../components/prateleiras-iniciais/prateleiras-iniciais.component';
import { SobreComponent } from '../components/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: PrateleirasIniciaisComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'cadastrar-produto', component: NovoProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
