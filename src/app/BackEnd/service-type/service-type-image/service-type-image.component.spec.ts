import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeImageComponent } from './service-type-image.component';

describe('ServiceTypeImageComponent', () => {
  let component: ServiceTypeImageComponent;
  let fixture: ComponentFixture<ServiceTypeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTypeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
