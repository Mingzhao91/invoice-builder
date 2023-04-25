import { Component, OnInit } from '@angular/core';

import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss'],
})
export class InvoiceListingComponent implements OnInit {
  constructor(private invoiceService: InvoiceService) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data) => {
        console.log('data: ', data);
      },
      error: (err) => {
        console.log('error: ', err);
      },
    });
  }
}
