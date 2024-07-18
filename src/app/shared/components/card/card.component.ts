import {Component, Input} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {Produto} from "../../interfaces/produto/produto";
import {DisplayPrecoPipe} from "../../pipes/display-preco/display-preco.pipe";
import {Button} from "primeng/button";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    RouterLink,
    DisplayPrecoPipe,
    Button
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({required: true}) produto!: Produto;

  constructor(private router: Router) {}

  getPrecoDesconto(produto: Produto) {
    return produto.preco * (1 - produto.desconto);
  }

  getDescontoPorcentagem(produto: Produto) {
    return `${produto.desconto * 100}% OFF`;
  }

  onClick() {
    this.router.navigate(
      ['/detalhes'],
      { queryParams: { produto: this.produto.id } }
    );
  }

  onComprar() {
    // TODO
  }

  onCarrinho() {
    // TODO
  }
}
