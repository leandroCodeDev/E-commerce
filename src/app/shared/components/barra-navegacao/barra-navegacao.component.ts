import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb, BreadcrumbModule } from 'primeng/breadcrumb';
import { MenuItemContent, MenuModule } from 'primeng/menu';
import { ToolbarModule } from 'primeng/toolbar';
import { filter } from 'rxjs';

@Component({
  selector: 'app-barra-navegacao',
  standalone: true,
  imports: [BreadcrumbModule, CommonModule],
  templateUrl: './barra-navegacao.component.html',
  styleUrl: './barra-navegacao.component.scss'
})
export class BarraNavegacaoComponent implements OnInit {
  items: any[] = [];
  home: any = { label: 'Home', url: '/' };
  showBreadcrumb: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.items = [
      { label: 'Home', routerLink: '/' },
      { label: 'Categorias', routerLink: '/categorias' },
      { label: 'Produtos', routerLink: '/produtos' },
      { label: 'Detalhes do Produto', routerLink: '/produto-detalhes' }
    ];
  }
}
