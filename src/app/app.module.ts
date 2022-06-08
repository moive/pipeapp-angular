import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';

import localeEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';
import { CustomPipeModule } from './components/custom-pipe/custom-pipe.module';
import { DarkModePipe } from './shared/pipes/dark-mode.pipe';

registerLocaleData(localeEsPe, 'es-PE');

@NgModule({
  declarations: [AppComponent, DarkModePipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesCommonModule,
    CustomPipeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
