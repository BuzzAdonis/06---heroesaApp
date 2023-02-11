import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
 // pure: false //si deseas que la carga sea en vivo
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe): string {

    if(value.alt_img){
      return value.alt_img;
    }

    return value.id  ? `assets/heroes/${ value.id }.jpg` : `assets/no-image.png`;
  }

}
