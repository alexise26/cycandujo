import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], input: string): any {
    if(!items) return [];
    if (input) {
      input= input.toLowerCase();
      return items.filter(function(el:any){
        return el.title.toLowerCase().indexOf(input) > -1 || el.text.toLowerCase().indexOf(input) > -1 ;
      })
    }
    return items;
  }

}
