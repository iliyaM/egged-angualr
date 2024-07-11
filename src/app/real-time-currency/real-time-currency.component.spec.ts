import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealTimeCurrencyComponent } from './real-time-currency.component';

describe('RealTimeCurrencyComponent', () => {
  let component: RealTimeCurrencyComponent;
  let fixture: ComponentFixture<RealTimeCurrencyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RealTimeCurrencyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RealTimeCurrencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
