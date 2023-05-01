import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from '../shared/material.module';

import { ClientListingComponent } from './components/client-listing/client-listing.component';
import { ClientDialogFormComponent } from './components/client-dialog-form/client-dialog-form.component';

@NgModule({
  declarations: [ClientListingComponent, ClientDialogFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [ClientListingComponent],
})
export class ClientsModule {}
