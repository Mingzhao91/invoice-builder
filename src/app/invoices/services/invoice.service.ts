import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Invoice, InvoicePaginationRsp } from '../models/invoice';

const BASE_URL = 'http://localhost:3000/api';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  constructor(private http: HttpClient) {}

  getInvoices({
    page,
    perPage,
    sortField,
    sortDir,
  }: {
    page: number;
    perPage: number;
    sortField: string;
    sortDir: string;
  }): Observable<InvoicePaginationRsp> {
    let queryString = `${BASE_URL}/invoices?page=${
      page + 1
    }&perPage=${perPage}`;

    if (sortField && sortDir) {
      queryString += `&sortField=${sortField}&sortDir=${sortDir}`;
    }

    return this.http.get<InvoicePaginationRsp>(queryString);
  }

  createInvoice(body: Invoice): Observable<Invoice> {
    return this.http.post<Invoice>(`${BASE_URL}/invoices`, body);
  }

  deleteInvoice(id: String): Observable<Invoice> {
    return this.http.delete<Invoice>(`${BASE_URL}/invoices/${id}`);
  }

  getInvoice(id: String): Observable<Invoice> {
    return this.http.get<Invoice>(`${BASE_URL}/invoices/${id}`);
  }

  updateInvoice(id: String, body: Invoice): Observable<Invoice> {
    return this.http.put<Invoice>(`${BASE_URL}/invoices/${id}`, body);
  }
}
