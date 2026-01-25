import { TestBed } from '@angular/core/testing';

import { InvoiceCreator } from './invoice-creator';

describe('InvoiceCreator', () => {
  let service: InvoiceCreator;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoiceCreator);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
