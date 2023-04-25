import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';

@NgModule({
  declarations: [InvoiceListingComponent],
  imports: [CommonModule, MaterialModule, FormsModule, HttpClientModule],
  exports: [InvoiceListingComponent],
})
export class InvoicesModule {}
