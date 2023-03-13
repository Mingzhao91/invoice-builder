import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { InvoiceBuilderRoutingModule } from './invoice-builder-routing.module';
import { InvoiceBuilderComponent } from './invoice-builder.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@NgModule({
  declarations: [
    InvoiceBuilderComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [CommonModule, MaterialModule, InvoiceBuilderRoutingModule],
})
export class InvoiceBuilderModule {}
