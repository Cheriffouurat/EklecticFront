import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimPaymentComponent } from './sim-payment.component';

describe('SimPaymentComponent', () => {
  let component: SimPaymentComponent;
  let fixture: ComponentFixture<SimPaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimPaymentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
