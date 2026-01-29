import { Injectable } from '@angular/core';
import { InvoiceItem } from '../models/invoice-item';

@Injectable({
  providedIn: 'root',
})
export class InvoiceCreatorService {

  constructor() { }

  private _invoiceItems: InvoiceItem[] = [];

  private _uploadedFile: File | null = null;

  public deleteInvoiceItem(id: number): void {
    this._invoiceItems = this._invoiceItems.filter(item => item.id !== id); // TODO: make the IDs shift when deleting
  }


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

  public get uploadedFile(): File | null {
    return this._uploadedFile;
  }
  public set uploadedFile(value: File | null) {
    this._uploadedFile = value;
  }
}
