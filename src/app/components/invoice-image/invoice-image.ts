import { Component, OnDestroy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { InvoiceCreatorService } from '../../services/invoice-creator';

@Component({
  selector: 'app-invoice-image',
  imports: [MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatExpansionModule],
  templateUrl: './invoice-image.html',
  styleUrl: './invoice-image.scss',
})
export class InvoiceImage implements OnDestroy {


  constructor(private readonly _invoiceCreatorService: InvoiceCreatorService) { }

  private _previewUrl: string | null = null;

  onDropZoneClick(): void {
    const fileInput = document.querySelector<HTMLInputElement>('.upload-drop-area input[type="file"]');
    fileInput?.click();
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = Array.from(input.files)[0];
      this.setUploadedFile(file);
    }
  }

  onFileDropped(event: DragEvent): void {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = Array.from(files)[0];
      this.setUploadedFile(file);
    }
  }

  private setUploadedFile(file: File | null): void {
    if (this._previewUrl) {
      URL.revokeObjectURL(this._previewUrl);
      this._previewUrl = null;
    }
    this._invoiceCreatorService.uploadedFile = file;
    if (file) {
      this._previewUrl = URL.createObjectURL(file);
    }
  }

  public getUploadedPreview(): string | null {
    if (this._previewUrl) return this._previewUrl;
    const file = this._invoiceCreatorService.uploadedFile;
    if (file) {
      this._previewUrl = URL.createObjectURL(file);
      return this._previewUrl;
    }
    return null;
  }

  ngOnDestroy(): void {
    if (this._previewUrl) {
      URL.revokeObjectURL(this._previewUrl);
      this._previewUrl = null;
    }
  }

  public removeUploadedFile(): void {
    this.setUploadedFile(null);
  }

  public getUploadedFile() {
    return this._invoiceCreatorService.uploadedFile;
  }

}
