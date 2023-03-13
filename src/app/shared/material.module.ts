import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatSidenavModule],
  exports: [MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}
