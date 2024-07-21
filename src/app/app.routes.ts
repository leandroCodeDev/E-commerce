import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produtos/detalhes-produtos.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { breadcrumb: 'Home' }
  },
  {
    path: 'detalhes',
    component: DetalhesProdutosComponent,
    data: { breadcrumb: 'Detalhes do produto' }
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent,
    data: { breadcrumb: 'Carrinho' }
  },
  {
    path: 'lista-produtos',
    component: ListagemProdutosComponent,
    data: { breadcrumb: 'Produtos' }

  },
  {
    path:'**',
    component: HomeComponent
  }
];
