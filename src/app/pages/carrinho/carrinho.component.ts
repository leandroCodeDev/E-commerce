import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '../../shared/services/carrinho/carrinho.service';
import { CommonModule } from '@angular/common';
import { Carrinho } from '../../shared/interfaces/carrinho/carrinho';
import { DisplayPrecoPipe } from "../../shared/pipes/display-preco/display-preco.pipe";
import { ProdutoCarrinho } from '../../shared/interfaces/carrinho/produto-carrinho';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [CommonModule, DisplayPrecoPipe, RouterModule],
  templateUrl: './carrinho.component.html',
  styleUrl: './carrinho.component.scss'
})
export class CarrinhoComponent implements OnInit{

  frete = "Grátis"

  total = ""

  carrinho:Carrinho = this.carrinhoService.carrinho.getValue()

  constructor(private carrinhoService: CarrinhoService) {}

  ngOnInit() {
    this.carrinhoService.carrinho.subscribe(valor => {
      this.carrinho = valor

      let resultado = 0
      for (const produto of this.carrinho.itens) {
        resultado += produto.desconto ? this.getPrecoDesconto(this.calcularPrecoQuantidade(produto), produto.desconto) : this.calcularPrecoQuantidade(produto)
      }
      
      this.total = `R$ ${resultado.toFixed(2).replaceAll('.', ',')}`
    })
  }

  adicionarProduto(prod:ProdutoCarrinho) {
    this.carrinhoService.alterarQuantidadeItemCarrinho(prod.id, prod.quantidade + 1)
  }

  removerProduto(prod:ProdutoCarrinho) {
    if (prod.quantidade > 1) {
      this.carrinhoService.alterarQuantidadeItemCarrinho(prod.id, prod.quantidade -1)
    }
  }

  excluirProduto(prod:ProdutoCarrinho) {
    this.carrinhoService.excluirItemCarrinho(prod.id)
  }

  calcularPrecoQuantidade(prod:ProdutoCarrinho) {
    return prod.preco * prod.quantidade
    
  }

  getPrecoDesconto(preco:number, desconto:number) {
    return (preco * (1 - desconto));
  }
}
