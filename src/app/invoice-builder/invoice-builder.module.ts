import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MainContentComponent } from './components/main-content/main-content.component';


@NgModule({
  declarations: [
    InvoiceBuilderComponent,
    MainContentComponent
  ],
  imports: [
    CommonModule,
    InvoiceBuilderRoutingModule
  ]
})
export class InvoiceBuilderModule { }
