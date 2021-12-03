import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {

  transform(array: any[], name: string): any[] {
    return array.filter(element => element.name.toLowerCase().includes(name.toLowerCase()));
  }

}
