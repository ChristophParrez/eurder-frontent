import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(array: any[], searchText: string, fieldsToSearchIn: string | string[]): any[] {
    let fields: string[] = typeof fieldsToSearchIn === 'string' ? [fieldsToSearchIn] : [...fieldsToSearchIn];
    return array.filter(element => {
      let match: boolean = false;
      fields.forEach(field => {
        if ( element[field].toLowerCase().includes(searchText.toLowerCase()) ) {
          match = true;
        }
      });
      return match;
    });
  }

}
