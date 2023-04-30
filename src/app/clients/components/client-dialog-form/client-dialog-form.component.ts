import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'client-dialog',
  template: `
    <h1 mat-dialog-title>Hi {{ data.name }}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field appearance="fill">
        <mat-label>Favorite Animal</mat-label>
        <input matInput [(ngModel)]="data.animal" />
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>
        Ok
      </button>
    </div>
  `,
})
export class ClientDialogFormComponent {
  constructor(
    public dialogRef: MatDialogRef<ClientDialogFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
