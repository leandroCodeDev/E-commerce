import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private httpClient: HttpClient) {}

    getTodasVendas() {
      return this.httpClient.get(`http://localhost:3000/vendas`)
    }
}
