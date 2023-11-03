import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './produtos/components/header/header.component';
import { HomeComponent } from './produtos/page/home/home.component';
import { CadastrarProdutoComponent } from './produtos/page/cadastrar-produto/cadastrar-produto.component';
import { ProdutoComponent } from './produtos/page/produto/produto.component';
import { EditarProdutoComponent } from './produtos/page/editar-produto/editar-produto.component';
import { CurrencyMaskModule } from 'ng2-currency-mask';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CadastrarProdutoComponent,
    ProdutoComponent,
    EditarProdutoComponent,
    HeaderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
