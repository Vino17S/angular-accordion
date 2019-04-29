import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Directive } from '@angular/core';

import { AppComponent } from './app.component';
// import { AccordionModule } from './common/accordion/accordion.module';
import { CommonModule } from '@angular/common';
import { AccordModule } from 'projects/accord/src/lib/accord.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // AccordionModule,
    AccordModule
    // Directive
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
