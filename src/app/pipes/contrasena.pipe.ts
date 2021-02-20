import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {

  transform(value: string, activar: boolean = true): string {

    if (activar) {
      console.log('activado');
      /* let pass = '';
      for (let i = 0; i < value.length; i++) {
        pass = pass + '*';
      } */
      return '*'.repeat(value.length);
    } else {
      console.log('desactivado');
      return value;
    }
  }

}
