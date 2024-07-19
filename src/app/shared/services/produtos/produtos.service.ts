import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Produto} from "../../interfaces/produto/produto";

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private httpClient: HttpClient) { }

  getTodosProtutos() {
    return this.httpClient.get<Produto[]>(`http://localhost:3000/produtos`)
  }

  getProtutoId(id: string) {
    return this.httpClient.get<Produto>(`http://localhost:3000/produtos/${id}`)
  }

  getProtutosPromocao() {
    return this.httpClient.get<Array<Produto>>(`http://localhost:3000/produtos?promocao=true`)
  }
}
