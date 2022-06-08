import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomContainerComponent } from './custom-container/custom-container.component';
import { GlobalModule } from 'src/app/shared/global/global.module';

@NgModule({
  declarations: [CustomContainerComponent],
  imports: [CommonModule, GlobalModule],
  exports: [CustomContainerComponent],
})
export class CustomPipeModule {}
