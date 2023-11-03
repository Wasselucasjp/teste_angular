import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProdutosServiceService } from '../../services/produto.service';
import { ActivatedRoute } from '@angular/router';
import { IProduto } from '../../interfaces/produto';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-produto',
  templateUrl: './editar-produto.component.html',
  styleUrls: ['./editar-produto.component.css']
})
export class EditarProdutoComponent implements OnInit {
   produto:IProduto [] = [];
  constructor(private produtosService: ProdutosServiceService, private route: ActivatedRoute,) {}

  produtoForm = new FormGroup({
    id: new FormControl(),
    nome: new FormControl('', Validators.required),
    codigoBarras: new FormControl(0, [
      Validators.required,
      Validators.min(3),
    ]),
    preco: new FormControl(0, [
      Validators.required,
      Validators.min(1),
      Validators.pattern(/^\d+(\.\d{1,2})?$/),
    ]),
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      const produtoId = params['id']; // Obtém o ID do produto da rota
      this.produtosService.buscarProdutoPorID(produtoId).subscribe(data => {
        this.produtoForm.patchValue(data);
      });
    });
  }

  salvarEdicao() {
    if (this.produtoForm.valid) {
      const produtoData = this.produtoForm.value;

      const produtoEditado: IProduto = {
        id: produtoData.id,
        nome: produtoData.nome || '',
        preco: produtoData.preco || 0,
        codigoBarras: produtoData.codigoBarras || 0,
      };

      Swal.fire({
        title: 'Confirmar edição',
        text: 'Tem certeza de que deseja editar este produto?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sim, editar',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          const editarProdutoObservable = this.produtosService.atualizarProduto(produtoEditado);
          editarProdutoObservable.subscribe((data) => {
            Swal.fire('200 OK', 'Produto editado com sucesso!');
            this.produtoForm.reset();
          });
        }
      });
    } else {
      this.produtoForm.markAllAsTouched();
    }
  }
}
