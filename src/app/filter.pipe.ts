import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: any[], field:string , value:string): any []{
    if(!value || !field)
      return values 
    return values.filter(item=>item[field].toLowerCase().includes(value.toLowerCase()));
  }

}
