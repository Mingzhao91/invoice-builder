import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatSnackBar } from '@angular/material/snack-bar';

import { InvoiceService } from '../../services/invoice.service';

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

  constructor(
    private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private router: Router,
    private invoiceService: InvoiceService
  ) {}

  ngOnInit(): void {
    this.createForm();
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

  onSubmit() {
    console.log(this.invoiceForm?.value);
    this.invoiceService.createInvoice(this.invoiceForm?.value).subscribe({
      next: (data) => {
        this.openSnackBar('Invoice created!', 'Success');
        this.invoiceForm?.reset();
        this.router.navigate(['dashboard', 'invoices']);
      },
      error: (err) => {
        console.log('err: ', err);
        this.openSnackBar('Failed to create an invoice!', 'Error');
      },
    });
  }
}
