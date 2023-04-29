export class Invoice {
  _id!: string;
  item!: string;
  qty!: number;
  date!: Date;
  due!: Date;
  tax!: number;
  rate!: number;
}

export class InvoicePaginationRsp {
  docs!: Invoice[];
  totalDocs!: number;
  totalPages!: number;
  page!: number;
  limit!: number;
}
