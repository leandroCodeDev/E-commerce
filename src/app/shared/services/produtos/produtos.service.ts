import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProdutosService {

  constructor(private httpClient: HttpClient) { }
  
  getTodosProtutos() {
    return this.httpClient.get(`http://localhost:3000/produtos`)
  }

  getProtutoId(id: string) {
    return this.httpClient.get(`http://localhost:3000/produtos/${id}`)
  }
}
