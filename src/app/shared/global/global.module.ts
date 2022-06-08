import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModePipe } from '../pipes/dark-mode.pipe';
import { TemperaturePipe } from '../pipes/temperature.pipe';

@NgModule({
  declarations: [DarkModePipe, TemperaturePipe],
  imports: [CommonModule],
  exports: [DarkModePipe, TemperaturePipe],
})
export class GlobalModule {}
