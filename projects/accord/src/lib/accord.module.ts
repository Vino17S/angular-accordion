import { NgModule } from '@angular/core';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionSectionComponent } from './accordion-section/accordion-section.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    // BrowserModule,
    // FormsModule,
    // CommonModule
  ],
  declarations: [AccordionComponent, AccordionSectionComponent],
  exports: [AccordionComponent, AccordionSectionComponent]
})
export class AccordModule { }
