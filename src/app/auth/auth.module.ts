import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../shared/material.module';

import { AuthComponent } from './components/auth/auth.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

@NgModule({
  declarations: [AuthComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
})
export class AuthModule {}
