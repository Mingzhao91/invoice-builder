import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
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

  downloadHandler(id: string) {
    this.invoiceService.downloadInvoice(id).subscribe({
      next: (data) => {
        console.log(data);

        saveAs(data, this.invoice.item);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
