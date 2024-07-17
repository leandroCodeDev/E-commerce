import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss'
})
export class ListagemProdutosComponent implements OnInit {
  valorPesquisa = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(
      params => {
        this.valorPesquisa = params['q'] || '';
      }
    );
  }

}
