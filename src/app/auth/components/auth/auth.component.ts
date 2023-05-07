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

  // googleAuthHandler() {
  //   return this.authService.googleAuth().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //       this.openSnackBar('Oops, something went wrong!', 'Error');
  //     },
  //   });
  // }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.isLoading = true;
    if (this.isLogin) {
      this.subscription.add(
        this.authService.login(this.authForm.value).subscribe({
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
            this.router.navigate(['dashboard', 'invoices']);
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
