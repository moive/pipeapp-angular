import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesCommonModule } from './components/pipes-common/pipes-common.module';

import localeEsPe from '@angular/common/locales/es-PE';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsPe, 'es-PE');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PipesCommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
