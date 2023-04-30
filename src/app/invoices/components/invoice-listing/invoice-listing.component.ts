import {
  AfterViewInit,
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { remove } from 'lodash';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';
import {
  Subscription,
  debounceTime,
  distinctUntilChanged,
  filter,
  fromEvent,
  tap,
} from 'rxjs';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss'],
})
export class InvoiceListingComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('filterInput') filterInput!: ElementRef;

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
  subscription: Subscription = new Subscription();

  constructor(
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.populateInvoices();
    this.handleFilterInput();
  }

  onSortChange() {
    this.populateInvoices();
  }

  handlePageEvent() {
    this.populateInvoices();
  }

  handleFilterInput() {
    this.subscription.add(
      fromEvent<KeyboardEvent>(this.filterInput.nativeElement, 'keyup')
        .pipe(debounceTime(500), distinctUntilChanged())
        .subscribe((event: KeyboardEvent) => {
          const filterValue = (<HTMLInputElement>event.target).value;
          this.populateInvoices(
            filterValue.trim().length > 0 ? filterValue.trim() : ''
          );
        })
    );
  }

  populateInvoices(filter: string = '') {
    this.isResultsLoading = true;
    this.subscription.add(
      this.invoiceService
        .getInvoices({
          page: this.paginator.pageIndex,
          perPage: this.paginator.pageSize,
          sortField: this.sort.active,
          sortDir: this.sort.direction,
          filter,
        })
        .subscribe({
          next: (data) => {
            this.dataSource = data.docs;
            this.resultsLength = data.totalDocs;
            this.isResultsLoading = false;
          },
          error: () => {
            this.openSnackBar('Failed to retrieve invoices!', 'Error');
            this.isResultsLoading = false;
          },
        })
    );
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

  ngOnDestroy() {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
