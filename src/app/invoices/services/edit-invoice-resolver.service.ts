import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable, map, take } from 'rxjs';

import { Invoice } from '../models/invoice';
import { InvoiceService } from './invoice.service';

@Injectable({
  providedIn: 'root',
})
export class EditInvoiceResolverService implements Resolve<Invoice> {
  constructor(private router: Router, private invoiceService: InvoiceService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Invoice> {
    const id = route.paramMap.get('id') as string;
    return this.invoiceService.getInvoice(id).pipe(
      take(1),
      map((invoice) => {
        if (!invoice) {
          this.router.navigate(['/dashboard', 'invoices']);
        }
        return invoice;
      })
    );
  }
}
