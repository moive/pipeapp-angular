import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'darkmode',
})
export class DarkModePipe implements PipeTransform {
  transform(value: any) {
    if (value) return 'bg-gray-900 text-white';
    return 'text-dark';
  }
}
