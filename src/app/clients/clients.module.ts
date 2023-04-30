import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { ClientListingComponent } from './components/client-listing/client-listing.component';

@NgModule({
  declarations: [ClientListingComponent],
  imports: [CommonModule, FormsModule, MaterialModule, HttpClientModule],
  exports: [ClientListingComponent],
})
export class ClientsModule {}
