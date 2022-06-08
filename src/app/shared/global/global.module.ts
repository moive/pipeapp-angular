import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkModePipe } from '../pipes/dark-mode.pipe';

@NgModule({
  declarations: [DarkModePipe],
  imports: [CommonModule],
  exports: [DarkModePipe],
})
export class GlobalModule {}
