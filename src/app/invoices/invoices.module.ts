import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../shared/material.module';

import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';

@NgModule({
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  exports: [InvoiceListingComponent, InvoiceFormComponent],
})
export class InvoicesModule {}
