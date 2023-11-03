import { Component } from '@angular/core';
import { IProduto } from 'src/app/produtos/interfaces/produto';
import { ProdutosServiceService } from 'src/app/produtos/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css'],
})
export class ProdutoComponent {
  produtos: IProduto[] = [];

  constructor(private produtosService: ProdutosServiceService) {}

  async ngOnInit() {
    const buscarTodosOsProdutosObserver =
      this.produtosService.buscarTodosOsProdutos();
    buscarTodosOsProdutosObserver.subscribe((data) => {
      this.produtos = data;
    });
  }

  remover(id: number) {
    Swal.fire({
      title: 'Confirmação',
      text: 'Tem certeza de que deseja excluir este produto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const deletarProdutoObserver = this.produtosService.deletarProduto(id);
        deletarProdutoObserver.subscribe(() => {
          this.produtos = this.produtos.filter((produto) => produto.id !== id);
          Swal.fire(
            'Produto Excluído',
            'O produto foi excluído com sucesso!',
            'success'
          );
        });
      }
    });
  }
}
