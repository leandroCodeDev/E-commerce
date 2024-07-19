import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produto } from '../../interfaces/produto/produto';
import { Carrinho } from '../../interfaces/carrinho/carrinho';
import { ProdutoCarrinho } from '../../interfaces/carrinho/produto-carrinho';


@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  carrinho:BehaviorSubject<Carrinho>;

  constructor() {
    let valor = sessionStorage.getItem('carrinho')
    let carr:Carrinho = valor == null ? {itens:[]} : JSON.parse(valor);
    this.carrinho = new BehaviorSubject<Carrinho>(carr); 
  } 


  adicionarItemCarrinho(produto:Produto) {

    let valor = this.carrinho.getValue();
    let index = valor.itens.findIndex((item) => item.id == produto.id)
    if(index >=  0){
      let item =  valor.itens[index]
      item.quantidade += 1
      valor.itens[index] = item
    }else{
      let produtoCarrinho:ProdutoCarrinho = {
        id: produto.id,
        nome: produto.nome,
        imagem: produto.imagem,
        preco: produto.preco,
        promocao: produto.promocao,
        desconto: produto.desconto,
        quantidade:1
      }

      valor.itens.push(produtoCarrinho)
    }
    this.saveStore(valor)
    
  }

  excluirItemCarrinho(idProduto:string) {
    let valor = this.carrinho.getValue();
    let index = valor.itens.findIndex((item) => item.id == idProduto)
    valor.itens.splice(index, 1)
    this.saveStore(valor)
  }


  alterarQuantidadeItemCarrinho(idProduto:string,quantidade:number) {
    if(quantidade >0){
      let valor = this.carrinho.getValue();
      let index = valor.itens.findIndex((item) => item.id == idProduto)
      if(index >=  0){
          let item:ProdutoCarrinho =  valor.itens[index]
          item.quantidade = quantidade
          valor.itens[index] = item        
          this.saveStore(valor)
      }
    }else{
      this.excluirItemCarrinho(idProduto)
    }
  }

  resetarContador() {
    this.saveStore({itens:[]})
  }


  saveStore(valor:Carrinho){
    this.carrinho.next(valor);
    sessionStorage.setItem('carrinho', JSON.stringify(this.carrinho.getValue()));
  }
}
