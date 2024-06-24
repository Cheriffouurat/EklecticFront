import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeDeatilComponent } from './service-type-deatil.component';

describe('ServiceTypeDeatilComponent', () => {
  let component: ServiceTypeDeatilComponent;
  let fixture: ComponentFixture<ServiceTypeDeatilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeDeatilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTypeDeatilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
