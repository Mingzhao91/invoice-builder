import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { JwtService } from '../../../core/services/jwt.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() showMenuIcon!: boolean;
  @Output() toggleSidenav = new EventEmitter<void>();

  constructor(private router: Router, private jwtService: JwtService) {}

  ngOnInit(): void {}

  logout() {
    this.jwtService.destroyToken();
    this.router.navigate(['/login']);
  }
}
