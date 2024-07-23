import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {HeaderComponent} from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { ProdutosService } from '../../shared/services/produtos/produtos.service';
import { Produto } from '../../shared/interfaces/produto/produto';
import { CardComponent } from '../../shared/components/card/card.component';
import { VendasService } from '../../shared/services/vendas/vendas.service';
import { Vendas } from '../../shared/interfaces/vendas/vendas';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, CarouselModule, CardComponent, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  ofertas:{ imgSrc: string}[] = [
    { imgSrc: 'oferta1.jpg' },
    { imgSrc: 'oferta2.jpg'},
    { imgSrc: 'oferta3.jpg' },
    { imgSrc: 'oferta2.jpg'}
  ];
  produtosPromocao:Array<Produto> = [];
  produtosVendidos:Array<Produto> = [];
  produtos:Array<Produto> = [];
  //produtosDaSemana:Array<Produto> = [];

  vendas:Array<Vendas> = [];

  constructor(private produtosService:ProdutosService, private vendasService:VendasService, private router: Router){}

  ngOnInit() {
    this.produtosService.getTodosProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      }
    );

    this.produtosService.getProdutosPromocao().subscribe(
      (produtos) => {
        this.produtosPromocao = produtos;
      }
    );

    this.vendasService.getVendasOrdenadosByLimites(7).subscribe(
      (vendas) => {
        this.vendas = vendas;
      }
    );

    this.produtosService.getTodosProdutos().subscribe(
      (produtos) => {
        this.produtos = produtos;
      }
    );
  }

  get produtosDaSemana() {
    let ids = this.vendas.map(item => item.produto_id);

    ids = ids.filter(function(item, i) {
      return ids.indexOf(item) === i;
    });

    return this.produtos.filter(item => ids.includes(item.id));
  }

  listaTodosProdutos() {
    this.router.navigate(['/lista-produtos'], { state: { produtos: this.produtos } });
  }
}
