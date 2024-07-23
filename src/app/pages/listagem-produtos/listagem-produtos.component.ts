import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {HeaderComponent} from "../../shared/components/header/header.component";
import {FooterComponent} from "../../shared/components/footer/footer.component";
import {ProdutosService} from "../../shared/services/produtos/produtos.service";
import {Produto} from "../../shared/interfaces/produto/produto";
import {FormsModule} from "@angular/forms";
import {CardModule} from "primeng/card";
import {Button} from "primeng/button";
import {CardComponent} from "../../shared/components/card/card.component";

@Component({
  selector: 'app-listagem-produtos',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    FormsModule,
    CardModule,
    Button,
    RouterLink,
    CardComponent
  ],
  templateUrl: './listagem-produtos.component.html',
  styleUrl: './listagem-produtos.component.scss'
})
export class ListagemProdutosComponent implements OnInit {
  valorPesquisa = '';
  produtos: Produto[] = [];

  constructor(
    private route: ActivatedRoute,
    private produtosService: ProdutosService
  ) {}

  ngOnInit() {
    const listaTodosProdutos = history.state;

    if (listaTodosProdutos.produtos) {
      this.produtos = listaTodosProdutos.produtos;
    } else {
      this.produtosService.getTodosProdutos().subscribe(
        (produtos) => {
          this.produtos = produtos;
        }
      );
    }

    this.route.queryParams.subscribe(
      params => {
        this.valorPesquisa = params['q'] || '';
      }
    );

  
  }

  get produtosPesquisa() {
    const palavras = this.valorPesquisa.toLowerCase().split('/(\s+)/');

    return this.produtos.filter(
      (produto) => {
        const nomeProduto = produto.nome.toLowerCase();

        for (const palavra of palavras) {
          if (!nomeProduto.includes(palavra)) {
            return false;
          }
        }

        return true;
      }
    );
  }

}
