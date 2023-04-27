import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

@NgModule({
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [InvoiceListingComponent, InvoiceFormComponent],
})
export class InvoicesModule {}
