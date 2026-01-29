import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InvoiceCreatorService } from '../../services/invoice-creator';
import { ScrollingModule } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-invoice-details',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule,
    ScrollingModule],
  templateUrl: './invoice-details.html',
  styleUrl: './invoice-details.scss',
})
export class InvoiceDetails {

  constructor(private readonly _invoiceCreatorService: InvoiceCreatorService) { }

  public get invoiceItems() {
    return this._invoiceCreatorService.invoiceItems;
  }

  public addInvoiceItem() {
    this._invoiceCreatorService.addInvoiceItem({ id: this._invoiceCreatorService.getInvoiceLength(), name: '', price: 0, quantity: 1 });
  }

  public getInvoiceItemsCount() {
    return this._invoiceCreatorService.getInvoiceLength();
  }

  public deleteInvoiceItem(id: number) {
    this._invoiceCreatorService.deleteInvoiceItem(id);
  }

}
