import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { of, switchMap } from 'rxjs';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InvoiceService } from '../../services/invoice.service';
import { Invoice } from '../../models/invoice';

export const MY_DATE_FORMAT = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT },
  ],
})
export class InvoiceFormComponent implements OnInit {
  invoiceForm?: FormGroup;
  invoice?: Invoice;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setInvoiceToForm();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: [0, Validators.required],
      rate: [0],
      tax: [0],
    });

    this.invoiceForm.controls['item'].invalid;
  }

  setInvoiceToForm() {
    this.activatedRoute.params
      .pipe(
        switchMap((params) => {
          return params['id']
            ? this.invoiceService.getInvoice(params['id'])
            : of(null);
        })
      )
      .subscribe({
        next: (invoice) => {
          if (invoice) {
            this.invoice = invoice;
            this.invoiceForm?.patchValue(this.invoice);
          }
        },
        error: () => this.openSnackBar('Failed to get an invoice!', 'Error'),
      });
  }

  onSubmit() {
    if (this.invoice) {
      this.invoiceService
        .updateInvoice(
          this.invoice._id.toString(),
          this.invoiceForm?.value as Invoice
        )
        .subscribe({
          next: () => {
            this.openSnackBar('Invoice updated', 'Success');
            this.leaveInvoiceForm();
          },
          error: () => {
            this.openSnackBar('Failed to update an invoice!', 'Error');
          },
        });
    } else {
      this.invoiceService.createInvoice(this.invoiceForm?.value).subscribe({
        next: () => {
          this.openSnackBar('Invoice created!', 'Success');
          this.leaveInvoiceForm();
        },
        error: () => {
          this.openSnackBar('Failed to create an invoice!', 'Error');
        },
      });
    }
  }

  leaveInvoiceForm() {
    this.invoiceForm?.reset();
    this.router.navigate(['dashboard', 'invoices']);
  }
}
