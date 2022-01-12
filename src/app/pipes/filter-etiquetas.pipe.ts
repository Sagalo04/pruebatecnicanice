import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterEtiquetas',
})
export class FilterEtiquetasPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    if (arg === '' || arg.length < 3) return value;
    const resultAstro: any[] = [];

    for (const astro of value) {
      if (
        astro.etiquetas[0].toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
        astro.etiquetas[1].toLowerCase().indexOf(arg.toLowerCase()) > -1
      ) {
        resultAstro.push(astro);
      }
    }
    return resultAstro;
  }
}
