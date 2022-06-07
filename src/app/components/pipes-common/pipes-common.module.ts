import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { NumberComponent } from './number/number.component';
import { TemplatePipeComponent } from './template-pipe/template-pipe.component';
import { DateComponent } from './date/date.component';
import { JsonComponent } from './json/json.component';
import { KeyValueComponent } from './key-value/key-value.component';
import { SliceComponent } from './slice/slice.component';
import { I18nSelectComponent } from './i18n-select/i18n-select.component';

@NgModule({
  declarations: [
    ContainerComponent,
    TextComponent,
    NumberComponent,
    TemplatePipeComponent,
    DateComponent,
    JsonComponent,
    KeyValueComponent,
    SliceComponent,
    I18nSelectComponent,
  ],
  imports: [CommonModule],
  exports: [ContainerComponent],
})
export class PipesCommonModule {}
