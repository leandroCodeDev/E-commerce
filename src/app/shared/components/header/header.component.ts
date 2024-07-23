import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {Button, ButtonDirective} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {InputTextModule} from "primeng/inputtext";
import {InputGroupModule} from "primeng/inputgroup";
import {PanelModule} from "primeng/panel";
import { CarrinhoService } from '../../services/carrinho/carrinho.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    Button,
    BadgeModule,
    InputTextModule,
    InputGroupModule,
    ButtonDirective,
    PanelModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  valorPesquisa = '';
  numItemsCarrinho = 0;
  

  constructor(private router: Router, private carrinhoService:CarrinhoService) {
    this.carrinhoService.carrinho.subscribe(() => this.numItemsCarrinho = this.carrinhoService.getQuantidadeItemCarrinho());
  }

  get badgeValue() {
    if (this.numItemsCarrinho) {
      return this.numItemsCarrinho.toString()
    }
    return '';
  }

  onSubmit() {
    if (this.valorPesquisa) {
      this.router.navigate(
        ['/lista-produtos'],
        { queryParams: { q: this.valorPesquisa } }
      );
    }
  }
}
