import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TokenInterceptorService } from './services/http-interceptor.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [TokenInterceptorService],
})
export class CoreModule {}
