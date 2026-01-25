
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { InvoiceCreatorService } from '../../services/invoice-creator';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-invoice-creator',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule],
  templateUrl: './invoice-creator.html',
  styleUrl: './invoice-creator.scss',
})
export class InvoiceCreator {

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
}
