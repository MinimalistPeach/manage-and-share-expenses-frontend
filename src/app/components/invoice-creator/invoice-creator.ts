
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-invoice-creator',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule],
  templateUrl: './invoice-creator.html',
  styleUrl: './invoice-creator.scss',
})
export class InvoiceCreator {}
