import { TestBed } from '@angular/core/testing';

import { AuthScreen } from './auth-screen';

describe('AuthScreen', () => {
  let service: AuthScreen;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthScreen);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
