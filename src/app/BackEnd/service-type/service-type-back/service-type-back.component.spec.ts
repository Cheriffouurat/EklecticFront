import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeBackComponent } from './service-type-back.component';

describe('ServiceTypeBackComponent', () => {
  let component: ServiceTypeBackComponent;
  let fixture: ComponentFixture<ServiceTypeBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeBackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTypeBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
