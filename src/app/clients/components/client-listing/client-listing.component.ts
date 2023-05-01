import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Subscription, of } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { ClientDialogFormComponent } from '../client-dialog-form/client-dialog-form.component';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.scss'],
})
export class ClientListingComponent implements OnInit {
  subscription: Subscription = new Subscription();
  isResultsLoading = false;
  dataSource: Client[] = [];
  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action'];

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog,
    private clientService: ClientService
  ) {}

  ngOnInit(): void {
    this.getClients();
  }

  getClients() {
    this.isResultsLoading = true;
    this.subscription.add(
      this.clientService.getClients().subscribe({
        next: (data) => {
          this.dataSource = data;
          this.isResultsLoading = false;
        },
        error: (err) => {
          this.openSnackBar('Failed to retrieve clients!', 'Error');
          this.isResultsLoading = false;
        },
      })
    );
  }

  saveBtnHanlder() {}

  openDialog(): void {
    const dialogRef = this.dialog.open(ClientDialogFormComponent, {
      width: '400px',
      height: '350px',
    });

    dialogRef
      .afterClosed()
      .pipe(
        filter((clientParam) => typeof clientParam !== undefined),
        switchMap((result) => {
          return this.clientService.createClient(result);
        })
      )
      .subscribe({
        next: (data) => {
          this.dataSource = [data as Client, ...this.dataSource];
          this.openSnackBar('Client created!', 'Success');
        },
        error: () => {
          this.openSnackBar('Failed to create client!', 'Error');
        },
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
