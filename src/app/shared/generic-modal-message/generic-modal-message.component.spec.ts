import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenericModalMessageComponent } from './generic-modal-message.component';

describe('GenericModalMessageComponent', () => {
  let component: GenericModalMessageComponent;
  let fixture: ComponentFixture<GenericModalMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenericModalMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenericModalMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
