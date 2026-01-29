import { Component } from '@angular/core';
import { InvoiceDetails } from '../../components/invoice-details/invoice-details';
import { InvoiceImage } from '../../components/invoice-image/invoice-image';

@Component({
  selector: 'app-create-invoice',
  imports: [
    InvoiceDetails,
    InvoiceImage
  ],
  templateUrl: './create-invoice.html',
  styleUrl: './create-invoice.scss',
})
export class CreateInvoice {

}
