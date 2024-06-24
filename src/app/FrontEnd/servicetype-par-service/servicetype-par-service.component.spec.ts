import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicetypeParServiceComponent } from './servicetype-par-service.component';

describe('ServicetypeParServiceComponent', () => {
  let component: ServicetypeParServiceComponent;
  let fixture: ComponentFixture<ServicetypeParServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicetypeParServiceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicetypeParServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
