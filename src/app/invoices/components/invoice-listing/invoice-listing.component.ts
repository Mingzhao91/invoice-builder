import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { remove } from 'lodash';

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

  constructor(
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.invoiceService.getInvoices().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: () => {
        this.openSnackBar('Failed to retrieve invoices!', 'Error');
      },
    });
  }

  saveBtnHanlder() {
    this.route.navigate(['dashboard', 'invoices', 'new']);
  }

  deleteBtnHandler(id: String) {
    this.invoiceService.deleteInvoice(id).subscribe({
      next: (data) => {
        remove(this.dataSource, (item) => {
          return item._id === data._id;
        });
        this.dataSource = [...this.dataSource];
        this.openSnackBar('Invoice deleted', 'Success');
      },
      error: () => {
        this.openSnackBar('Failed to delete an invoice!', 'Error');
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
