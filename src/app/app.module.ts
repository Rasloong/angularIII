import { NgModule,LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from "@angular/common";
import  localEs  from "@angular/common/locales/es";
import  localFr  from "@angular/common/locales/fr";
import  localEn  from "@angular/common/locales/en";
registerLocaleData(localEs);
registerLocaleData(localFr);
registerLocaleData(localEn);
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomSecurePipe } from './pipes/dom-secure.pipe';
import { PasswordPipe } from './pipes/password.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomSecurePipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'en'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
