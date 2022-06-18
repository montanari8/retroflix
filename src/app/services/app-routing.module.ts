import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrateleirasIniciaisComponent } from '../components/prateleiras-iniciais/prateleiras-iniciais.component';
import { SobreComponent } from '../components/sobre/sobre.component';

const routes: Routes = [
  {path: '', component: PrateleirasIniciaisComponent},
  {path: 'sobre', component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
