import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumberComponent } from './number/number.component';
import { TemplatePipeComponent } from './template-pipe/template-pipe.component';
import { DateComponent } from './date/date.component';
import { JsonComponent } from './json/json.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    NumberComponent,
    TemplatePipeComponent,
    DateComponent,
    JsonComponent,
  ],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
