import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { JwtService } from '../../../core/services/jwt.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuIcon!: boolean;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(
    private router: Router,
    private jwtService: JwtService,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  logout() {
    this.authService.logout().subscribe({
      next: (data) => {
        console.log('data: ', data);
      },
      error: (err) => {
        this.openSnackBar('Something went wrong!', 'Error');
      },
      complete: () => {
        this.jwtService.destroyToken();
        this.router.navigate(['/login']);
      },
    });
  }
}
