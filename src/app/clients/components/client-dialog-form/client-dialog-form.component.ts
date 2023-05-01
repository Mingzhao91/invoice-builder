import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { ClientService } from '../../services/client.service';

export interface DialogData {
  clientId: string;
}

@Component({
  selector: 'client-dialog',
  templateUrl: './client-dialog-form.component.html',
  styleUrls: ['./client-dialog-form.component.scss'],
})
export class ClientDialogFormComponent implements OnInit, OnDestroy {
  clientForm!: FormGroup;
  subscription: Subscription = new Subscription();
  title = 'Create Client';

  constructor(
    public dialogRef: MatDialogRef<ClientDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private snackBar: MatSnackBar,

    private fb: FormBuilder,
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.initClientForm();

    if (this.data && this.data.clientId) {
      this.setClientToForm(this.data.clientId);
    }
  }

  setClientToForm(clientId: string) {
    this.subscription.add(
      this.clientService.getClient(clientId).subscribe({
        next: (data) => {
          this.title = 'Edit Client';
          this.clientForm.patchValue(data);
        },
        error: () => {
          this.openSnackBar('Failed to retrieve client!', 'Error');
        },
      })
    );
  }

  initClientForm() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onCancelBtnClick(): void {
    this.dialogRef.close();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}
