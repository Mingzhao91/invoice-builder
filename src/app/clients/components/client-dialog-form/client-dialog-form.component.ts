import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'client-dialog',
  templateUrl: './client-dialog-form.component.html',
  styleUrls: ['./client-dialog-form.component.scss'],
})
export class ClientDialogFormComponent implements OnInit {
  clientForm!: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<ClientDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initClientForm();
  }

  private initClientForm() {
    this.clientForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  onCancelBtnClick(): void {
    this.dialogRef.close();
  }
}
