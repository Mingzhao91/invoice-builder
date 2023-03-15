import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';

import { MatSidenav } from '@angular/material/sidenav';

const MAX_WIDTH_BREAKPOINT = 768;

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSidenav) sidenav!: MatSidenav;

  constructor(private observer: BreakpointObserver) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.observer
      .observe([`(max-width: ${MAX_WIDTH_BREAKPOINT}px)`])
      .subscribe((resp) => {
        this.sidenav.mode = resp.matches ? 'over' : 'side';
        this.sidenav[resp.matches ? 'close' : 'open']();
      });
  }
}
