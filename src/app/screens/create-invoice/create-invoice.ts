import { Component } from '@angular/core';
import { InvoiceCreator } from '../../components/invoice-creator/invoice-creator';

@Component({
  selector: 'app-create-invoice',
  imports: [
    InvoiceCreator
  ],
  templateUrl: './create-invoice.html',
  styleUrl: './create-invoice.scss',
})
export class CreateInvoice {

}
