import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProduto } from '../interfaces/produto';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosServiceService {
  
  api = 'http://localhost:8080/api/produtos';

  constructor(private http: HttpClient) { }

  buscarTodosOsProdutos(): Observable<IProduto[]> {
    return this.http.get<IProduto[]>(this.api);
  }

  buscarProdutoPorID(produtoId: number) {
    return this.http.get<IProduto>(`${this.api}/${produtoId}`);
  }
  

  cadastrarProduto(produto:Omit<IProduto,"id">):Observable<IProduto>{
      return this.http.post<IProduto>(this.api, produto);
  }

  atualizarProduto(atualizaProduto:IProduto):Observable<IProduto>{
    return this.http.put<IProduto>(`${this.api}/${atualizaProduto.id}`,atualizaProduto);
  }

  deletarProduto(produto_id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${produto_id}`);
  }
  
}
