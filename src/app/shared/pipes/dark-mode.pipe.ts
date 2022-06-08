import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode',
})
export class DarkModePipe implements PipeTransform {
  transform(value: any) {
    return value ? 'bg-gray-900 text-white' : 'text-dark';
  }
}
