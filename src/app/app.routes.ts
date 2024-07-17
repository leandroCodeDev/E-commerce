import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetalhesProdutosComponent } from './pages/detalhes-produtos/detalhes-produtos.component';
import { CarrinhoComponent } from './pages/carrinho/carrinho.component';
import { ListagemProdutosComponent } from './pages/listagem-produtos/listagem-produtos.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'detalhes',
    component: DetalhesProdutosComponent
  },
  {
    path: 'carrinho',
    component: CarrinhoComponent
  },
  {
    path: 'lista-produtos',
    component: ListagemProdutosComponent

  },
  {
    path:'**',
    component: HomeComponent
  }
];
