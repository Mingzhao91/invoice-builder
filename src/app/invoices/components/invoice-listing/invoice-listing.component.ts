import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss'],
})
export class InvoiceListingComponent implements OnInit {
  displayedColumns: string[] = [
    'item',
    'date',
    'due',
    'qty',
    'tax',
    'rate',
    'action',
  ];
  dataSource: Invoice[] = [];

  constructor(private invoiceService: InvoiceService, private route: Router) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data) => {
        this.dataSource = data;
        console.log('data: ', data);
      },
      error: (err) => {
        console.log('error: ', err);
      },
    });
  }

  saveBtnHanlder() {
    this.route.navigate(['dashboard', 'invoices', 'new']);
  }
}
