import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';

import { ClientService } from '../../services/client.service';
import { Client } from '../../models/client';

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
          this.openSnackBar('Failed to retrieve invoices!', 'Error');
          this.isResultsLoading = false;
        },
      })
    );
  }

  saveBtnHanlder() {}

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
