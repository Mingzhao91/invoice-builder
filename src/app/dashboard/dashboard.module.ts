import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from '../shared/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { InvoicesModule } from '../invoices/invoices.module';

@NgModule({
  declarations: [
    DashboardComponent,
    MainContentComponent,
    SideNavComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DashboardRoutingModule,
    InvoicesModule,
  ],
})
export class DashboardModule {}
