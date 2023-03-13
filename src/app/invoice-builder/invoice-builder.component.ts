import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-invoice-builder',
  template: `
    <p>invoice-builder works!</p>

    <router-outlet></router-outlet>
  `,
  styles: [],
})
export class InvoiceBuilderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
