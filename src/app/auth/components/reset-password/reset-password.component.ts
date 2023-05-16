import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../../core/services/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit, OnDestroy {
  isLoading = false;
  form!: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
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
    let { password, confirmPassword } = this.form.value;

    if (password !== confirmPassword) {
      this.openSnackBar('Both passwords must match', 'Warning');
      return;
    }

    this.isLoading = true;
    this.subscription.add(
      this.authService
        .resetPassword({ token: this.route.snapshot.params['token'], password })
        .subscribe({
          next: () => {
            this.isLoading = false;
            this.openSnackBar('Password updated successfully', 'Success');
            this.router.navigateByUrl('/login');
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
