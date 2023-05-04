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
import { ClientService } from 'src/app/clients/services/client.service';
import { Invoice } from '../../models/invoice';
import { Client } from 'src/app/clients/models/client';

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
  clients: Client[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private snackBar: MatSnackBar,
    private invoiceService: InvoiceService,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.createForm();
    this.setInvoiceToForm();
    this.setClients();
  }

  setClients() {
    this.clientService.getClients().subscribe({
      next: (data) => {
        this.clients = data;
      },
      error: () => {
        this.openSnackBar('Failed to get clients!', 'Error');
      },
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  createForm() {
    this.invoiceForm = this.fb.group({
      item: ['', Validators.required],
      date: ['', Validators.required],
      due: ['', Validators.required],
      qty: ['', Validators.required],
      client: ['', Validators.required],
      rate: [''],
      tax: [''],
    });

    this.invoiceForm.controls['item'].invalid;
  }

  setInvoiceToForm() {
    this.activatedRoute.data.subscribe(({ invoice }) => {
      this.invoice = invoice as Invoice;
      this.invoiceForm?.patchValue(this.invoice);
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
