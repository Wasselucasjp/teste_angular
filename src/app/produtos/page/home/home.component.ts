import { Component } from '@angular/core';
import { IProduto } from '../../interfaces/produto';
import { ProdutosServiceService } from '../../services/produto.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  produtos: IProduto[] = [];

  constructor(private produtosService:ProdutosServiceService){}

  async ngOnInit() {
    const buscarTodosOsProdutosObserver = this.produtosService.buscarTodosOsProdutos();
    buscarTodosOsProdutosObserver.subscribe(data => {
      this.produtos = data
    })
  }
}
