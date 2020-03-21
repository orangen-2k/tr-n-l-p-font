import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converGenderpipetspipe'
})
export class ConverGenderpipetspipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value == 1 ? "Nam" : "Nữ";
  }

}