import { TemperatureValues } from '../enums/temperature.enum';
import { TemperaturePipe } from './temperature.pipe';

describe('TemperaturePipe', () => {
  it('create an instance', () => {
    const pipe = new TemperaturePipe();
    expect(pipe).toBeTruthy();
  });

  it('Should return C degrees if I send a value in C', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(10, TemperatureValues.C)).toEqual('10°C');
  });

  it('Should return F degrees if I send a value F', () => {
    const pipe = new TemperaturePipe();

    expect(pipe.transform(12, TemperatureValues.F)).toEqual('53.6°F');
  });
});
