import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppBase } from './app-base';

describe('AppBase', () => {
  let component: AppBase;
  let fixture: ComponentFixture<AppBase>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppBase]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppBase);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
