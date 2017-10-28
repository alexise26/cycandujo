import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'preview'
})
export class PreviewPipe implements PipeTransform {

  transform(value: string): string {

    for(let i = 0; i < value.length; i++){
      if (value.charAt(i) === ".") {
          return value.substring(0,i+1);
      }
    }

  }

}
