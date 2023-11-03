import { Component } from '@angular/core';
import { IProduto } from 'src/app/produtos/interfaces/produto';
import { ProdutosServiceService } from 'src/app/produtos/services/produto.service';


@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  produtos: IProduto[] = [];

  constructor(private produtosService:ProdutosServiceService){}

  async ngOnInit() {
    const buscarTodosOsProdutosObserver = this.produtosService.buscarTodosOsProdutos();
    buscarTodosOsProdutosObserver.subscribe(data => {
      this.produtos = data
    })
  }
  
  remover(id:number){
    const deletarProdutoObserver = this.produtosService.deletarProduto(id)
    deletarProdutoObserver.subscribe(() => {
      this.produtos = this.produtos.filter((produto)=>
      produto.id !==id
      );
    })
    
  }

}
