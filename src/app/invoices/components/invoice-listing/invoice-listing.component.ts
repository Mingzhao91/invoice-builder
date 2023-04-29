import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { remove } from 'lodash';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss'],
})
export class InvoiceListingComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
  isResultsLoading = false;
  resultsLength = 0;

  constructor(
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.populateInvoices();
  }

  handlePageEvent(event: PageEvent) {
    this.populateInvoices({ page: ++event.pageIndex, perPage: event.pageSize });
  }

  populateInvoices(
    {
      page,
      perPage,
    }: {
      page: number;
      perPage: number;
    } = { page: 1, perPage: 10 }
  ) {
    this.isResultsLoading = true;
    this.invoiceService.getInvoices({ page, perPage }).subscribe({
      next: (data) => {
        console.log(data);
        this.dataSource = data.docs;
        this.resultsLength = data.totalDocs;
        this.isResultsLoading = false;
      },
      error: () => {
        this.openSnackBar('Failed to retrieve invoices!', 'Error');
        this.isResultsLoading = false;
      },
    });
  }

  saveBtnHanlder() {
    this.router.navigate(['dashboard', 'invoices', 'new']);
  }

  editBtnHandler(id: string) {
    this.router.navigate(['dashboard', 'invoices', id]);
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
