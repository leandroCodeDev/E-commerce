import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {HeaderComponent} from "../../shared/components/header/header.component";
import { FooterComponent } from "../../shared/components/footer/footer.component";
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, HeaderComponent, FooterComponent, CarouselModule],
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

}
