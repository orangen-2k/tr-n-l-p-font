import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convergenderpipets'
})
export class ConverGenderpipetsPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 1  ? "Nam" : "Nữ" ;
  }

}