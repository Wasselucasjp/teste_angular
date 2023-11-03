import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosServiceService } from 'src/app/produtos/services/produto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css'],
})
export class CadastrarProdutoComponent {
  constructor(private produtosService: ProdutosServiceService) {}

  

  produtoForm = new FormGroup({
    nome: new FormControl('', Validators.required,),
    codigoDeBarras: new FormControl(0, [
      Validators.required,
      Validators.min(3),
    ]),
    preco: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
    ]),
  });

  enviar() {
    if (this.produtoForm.valid) {
      const produtoData = this.produtoForm.value;

      const novoProduto = {
        nome: produtoData.nome || '',
        preco: produtoData.preco || 0,
        codigoBarras: produtoData.codigoDeBarras || 0,
      };

      Swal.fire({
        title: 'Confirmar cadastro',
        text: 'Tem certeza de que deseja cadastrar este produto?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, cadastrar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          const cadastrarProdutoObservable =
            this.produtosService.cadastrarProduto(novoProduto);
          cadastrarProdutoObservable.subscribe((data) => {
            Swal.fire(' 201 Created', 'Produto cadastrado com sucesso!');
            this.produtoForm.reset();
          });
        }
      });
    } else {
      // Marca todos os campos como tocados
      this.produtoForm.markAllAsTouched();
    }
  }
}
