import { Component, Input } from '@angular/core';
import { Produto } from '../../shared/interfaces/produto/produto';
import { ProdutosService } from '../../shared/services/produtos/produtos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../../shared/services/carrinho/carrinho.service';
import {Button} from "primeng/button";
import { DisplayPrecoPipe } from '../../shared/pipes/display-preco/display-preco.pipe';
import { Comentario } from '../../shared/interfaces/comentario/comentario';
import { ComentariosService } from '../../shared/services/comentarios/comentarios.service';

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
  @Input({required: true}) comentarios: Array<Comentario> = [];
  productId: string = '0';

  constructor(
    private produtosService:ProdutosService,
    private route: ActivatedRoute,
    private carrinhoService:CarrinhoService,
    private router: Router,
    private comentarioService:ComentariosService,

  ){
    this.route.queryParams.subscribe(params => {

      this.productId = params['produto'];
    });
  }

  ngOnInit() {
    this.produtosService.getProdutoId(this.productId).subscribe(
      (produtos) => {
        this.produto = produtos;
      }
    );
    this.comentarioService.getComentarioProdutoId(this.productId).subscribe(
      (comentarios) => {
        this.comentarios = comentarios;
      }
    );
  }

  onComprar() {
    this.carrinhoService.adicionarItemCarrinho(this.produto)
    this.router.navigate(['/carrinho'])
  }

  onCarrinho() {
    this.carrinhoService.adicionarItemCarrinho(this.produto)
  }
}
