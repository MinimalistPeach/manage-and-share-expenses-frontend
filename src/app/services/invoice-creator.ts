import { Injectable } from '@angular/core';
import { InvoiceItem } from '../models/invoice-item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceCreatorService {

  constructor() { }

  private _invoiceItems: InvoiceItem[] = [];


  public get invoiceItems(): InvoiceItem[] {
    return this._invoiceItems;
  }
  public set invoiceItems(value: InvoiceItem[]) {
    this._invoiceItems = value;
  }

  public addInvoiceItem(item: InvoiceItem): void {
    this._invoiceItems.push(item);
  }

  public getInvoiceLength(): number {
    return this._invoiceItems.length;
  }
}
