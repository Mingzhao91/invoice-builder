import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../core/services/auth.service';
import { JwtService } from '../../../core/services/jwt.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit, OnDestroy {
  title = '';
  isLogin = true;
  isLoading = false;
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
    this.isLogin = this.router.url === '/login';
    this.title = this.isLogin ? 'Login' : 'Sign Up';
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      name: '',
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.isLogin) {
      let { email, password } = this.authForm.value;
      let user: User = { email, password };
      this.subscription.add(
        this.authService.login(user).subscribe({
          next: (data) => {
            this.JWTService.setToken(data.token);
            this.router.navigate(['dashboard', 'invoices']);
          },
          error: () => {
            this.isLoading = false;
            this.openSnackBar('Oops, something went wrong!', 'Error');
          },
        })
      );
    } else {
      this.subscription.add(
        this.authService.signup(this.authForm.value).subscribe({
          next: () => {
            this.isLoading = false;
            this.openSnackBar('Signup Successful', 'Success');
            this.router.navigate(['/login']);
          },
          error: () => {
            this.isLoading = false;
            this.openSnackBar('Oops, something went wrong!!', 'Error');
          },
        })
      );
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
