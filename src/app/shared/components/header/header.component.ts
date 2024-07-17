import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  valorPesquisa = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (this.valorPesquisa) {
      this.router.navigate(
        ['/lista-produtos'],
        { queryParams: { q: this.valorPesquisa } }
      );
      let route = '/lista-produtos';
    }
  }
}
