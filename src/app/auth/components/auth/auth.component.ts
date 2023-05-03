import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  authForm!: FormGroup;
  subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private authService: AuthService,
    private JWTService: JwtService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.authForm.value);
    this.subscription.add(
      this.authService.login(this.authForm.value).subscribe({
        next: (data) => {
          this.JWTService.setToken(data.token);
          this.router.navigate(['dashboard', 'invoices']);
        },
        error: () => {
          this.openSnackBar('Unable to login!', 'Error');
        },
      })
    );
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
