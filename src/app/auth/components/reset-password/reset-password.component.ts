import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  isLoading = false;
  form!: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    this.form = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  onSubmit() {
    this.isLoading = true;
    this.subscription.add(
      this.authService.forgotPassword(this.form.value).subscribe({
        next: (data: any) => {
          console.log('data: ', data);
          this.isLoading = false;
          this.openSnackBar(data.message, 'Success');
        },
        error: () => {
          this.isLoading = false;
          this.openSnackBar('Oops, something went wrong!', 'Error');
        },
      })
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
