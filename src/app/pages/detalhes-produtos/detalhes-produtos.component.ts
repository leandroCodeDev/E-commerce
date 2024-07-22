import { Component, Input } from '@angular/core';
import { Produto } from '../../shared/interfaces/produto/produto';
import { ProdutosService } from '../../shared/services/produtos/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../../shared/services/carrinho/carrinho.service';
import {Button} from "primeng/button";
import { DisplayPrecoPipe } from '../../shared/pipes/display-preco/display-preco.pipe';

@Component({
  selector: 'app-detalhes-produtos',
  standalone: true,
  imports: [
    Button
  ],
  templateUrl: './detalhes-produtos.component.html',
  styleUrl: './detalhes-produtos.component.scss'
})
export class DetalhesProdutosComponent {
  @Input({required: true}) produto: Produto = {} as Produto;

  productId: string = '0';
  
  constructor(private produtosService:ProdutosService, private route: ActivatedRoute, private carrinhoService:CarrinhoService, private router: Router){
    this.route.queryParams.subscribe(params => {

      this.productId = params['produto'];
    });
  }

  ngOnInit() {
    this.produtosService.getProtutoId(this.productId).subscribe(
      (produtos) => {
        this.produto = produtos;
      }
    );
  }

  onCarrinho() {
    this.carrinhoService.adicionarItemCarrinho(this.produto)
    this.router.navigate(['/carrinho'])
  }
}
