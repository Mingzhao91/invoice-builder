import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';
import { remove } from 'lodash';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';
import { ClientDialogFormComponent } from '../client-dialog-form/client-dialog-form.component';

@Component({
  selector: 'app-client-listing',
  templateUrl: './client-listing.component.html',
  styleUrls: ['./client-listing.component.scss'],
})
export class ClientListingComponent implements OnInit {
  @ViewChild('clientTable') clientTable!: MatTable<any>;

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
        error: () => {
          this.openSnackBar('Failed to retrieve clients!', 'Error');
          this.isResultsLoading = false;
        },
      })
    );
  }

  deleteBtnHandler(clientId: string) {
    this.subscription.add(
      this.clientService.deleteClient(clientId).subscribe({
        next: (data) => {
          remove(this.dataSource, (item) => {
            return item._id === data._id;
          });
          this.dataSource = [...this.dataSource];
          this.openSnackBar('Client deleted', 'Success');
        },
        error: () => {
          this.openSnackBar('Failed to delete a client!', 'Error');
        },
      })
    );
  }

  openDialog(clientId: string): void {
    const options = {
      width: '400px',
      height: '350px',
      data: {},
    };

    if (clientId) {
      options.data = { clientId };
    }

    const dialogRef = this.dialog.open(ClientDialogFormComponent, options);

    dialogRef
      .afterClosed()
      .pipe(
        filter((clientParam) => typeof clientParam === 'object'),
        switchMap((result) => {
          return clientId
            ? this.clientService.updateClient(clientId, result)
            : this.clientService.createClient(result);
        })
      )
      .subscribe({
        next: (data) => {
          if (clientId) {
            let clientToUpdateIndex = this.dataSource.findIndex(
              (client) => client._id === clientId
            );

            if (clientToUpdateIndex >= 0) {
              this.dataSource[clientToUpdateIndex] = data;
              this.clientTable.renderRows();
            }

            this.openSnackBar('Client updated!', 'Success');
          } else {
            this.dataSource = [data as Client, ...this.dataSource];
            this.openSnackBar('Client created!', 'Success');
          }
        },
        error: () => {
          this.openSnackBar(
            `Failed to ${clientId ? 'update' : 'create'} client!`,
            'Error'
          );
        },
      });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
