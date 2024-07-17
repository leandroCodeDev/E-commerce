import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {HeaderComponent} from "../../shared/components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
