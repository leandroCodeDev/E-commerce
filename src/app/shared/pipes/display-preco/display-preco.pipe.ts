import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayPreco',
  standalone: true
})
export class DisplayPrecoPipe implements PipeTransform {

  transform(preco: number): string {
    return `R$ ${preco.toFixed(2).replaceAll('.', ',')}`;
  }

}
