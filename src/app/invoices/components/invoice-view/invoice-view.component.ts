import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { saveAs } from 'file-saver';

import { Invoice } from '../../models/invoice';
import { InvoiceService } from '../../services/invoice.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.scss'],
})
export class InvoiceViewComponent implements OnInit {
  invoice!: Invoice;
  total!: number;
  isLoading = false;

  constructor(
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ invoice }) => {
      console.log('invoice: ', invoice);
      this.invoice = invoice;

      if (
        typeof this.invoice.qty !== 'undefined' &&
        typeof this.invoice.rate !== 'undefined'
      ) {
        this.total = this.invoice.qty * this.invoice.rate;
      }

      let salesTax = 0;
      if (typeof this.invoice.tax !== 'undefined') {
        salesTax = (this.total * this.invoice.tax) / 100;
      }

      this.total += salesTax;
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  downloadHandler(id: string) {
    this.isLoading = true;
    this.invoiceService.downloadInvoice(id).subscribe({
      next: (data) => {
        this.isLoading = false;
        saveAs(data, this.invoice.item);
      },
      error: (err) => {
        this.isLoading = false;
        this.openSnackBar('Error while downloading invoice', 'Error');
      },
    });
  }
}
