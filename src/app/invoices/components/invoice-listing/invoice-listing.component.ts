import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { remove } from 'lodash';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss'],
})
export class InvoiceListingComponent implements OnInit, AfterViewInit {
  @ViewChild(MatSort) sort!: MatSort;
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

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.populateInvoices();
  }

  onSortChange() {
    this.populateInvoices();
  }

  handlePageEvent(event: PageEvent) {
    this.populateInvoices();
  }

  populateInvoices() {
    this.isResultsLoading = true;
    this.invoiceService
      .getInvoices({
        page: this.paginator.pageIndex,
        perPage: this.paginator.pageSize,
        sortField: this.sort.active,
        sortDir: this.sort.direction,
      })
      .subscribe({
        next: (data) => {
          this.paginator.pageIndex = 0;
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
