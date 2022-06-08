import { Pipe, PipeTransform } from '@angular/core';
import { TemperatureValues } from '../enums/temperature.enum';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number, type: TemperatureValues): string {
    let formula: number = value || 0;
    if (type == TemperatureValues.F) {
      let v = value * (9 / 5) + 32;
      formula = parseFloat(v.toFixed(1));
    }

    return `${formula}°${type}`;
  }
}
