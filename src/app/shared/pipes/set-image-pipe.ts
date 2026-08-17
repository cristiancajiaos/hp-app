import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'setImage',
})
export class SetImagePipe implements PipeTransform {
  transform(imgSrc: string): string {
    return imgSrc.length > 0 ? imgSrc : 'assets/images/image_not_available.jpg';
  }
}
