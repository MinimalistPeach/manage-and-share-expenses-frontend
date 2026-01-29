import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceImage } from './invoice-image';

describe('InvoiceImage', () => {
  let component: InvoiceImage;
  let fixture: ComponentFixture<InvoiceImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoiceImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
