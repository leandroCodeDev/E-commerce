import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vendas } from '../../interfaces/vendas/vendas';

@Injectable({
  providedIn: 'root'
})
export class VendasService {

  constructor(private httpClient: HttpClient) {}

    getTodasVendas() {
      return this.httpClient.get<Vendas[]>(`http://localhost:3000/vendas`)
    }

    getVendasOrdenadosByLimites(limite:number) {
      return this.httpClient.get<Array<Vendas>>(`http://localhost:3000/vendas?_sort=-data&_limit=${limite}`)
    }


}
