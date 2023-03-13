import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InvoiceBuilderComponent } from './invoice-builder.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceBuilderComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InvoiceBuilderRoutingModule {}
