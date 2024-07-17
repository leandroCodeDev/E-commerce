import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  constructor(private httpClient: HttpClient) {}

  getTodosComentarios() {
    return this.httpClient.get(`http://localhost:3000/comentarios`)
  }

  getComentarioProdutoId(produtoId: string) {
    return this.httpClient.get(`http://localhost:3000/comentarios?produto_id=${produtoId}`)
  }
}