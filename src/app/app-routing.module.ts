import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarProdutoComponent } from './produtos/page/cadastrar-produto/cadastrar-produto.component';
import { ProdutoComponent } from './produtos/page/produto/produto.component';
import { EditarProdutoComponent } from './produtos/page/editar-produto/editar-produto.component';
import { HomeComponent } from './produtos/page/home/home.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'produtos', component:ProdutoComponent
  },
  {
    path:'produtos/cadastrar', component:CadastrarProdutoComponent
  },
  {
    path:'produtos/editar/:id', component:EditarProdutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
