import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

  transform(text: any): any {
    text= text.charAt(0).toUpperCase() + text.slice(1);

    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i) ==='.' && text.charAt(i+1) ===' ') {
          text = text.substring(0, i+2) + text.charAt(i+2).toUpperCase() +text.slice(i+3);
        }
        if (text.charAt(i) ==='.' && text.charAt(i+1) ==='<') {
          text = text.substring(0, i+5) + text.charAt(i+5).toUpperCase() +text.slice(i+6);
        }
        if (text.charAt(i) ==='.' && text.charAt(i+2) ==='b'&& text.charAt(i+3) ==='>') {
          text = text.substring(0, i+4) + text.charAt(i+4).toUpperCase() +text.slice(i+5);
        }
    }

    return text;

  }
}
