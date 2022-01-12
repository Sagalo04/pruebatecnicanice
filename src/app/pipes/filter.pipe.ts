import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultAstro: any[] = [];

    for (const astro of value) {
      if (astro.titulo.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultAstro.push(astro);
      }
    }
    return resultAstro;
  }
}
