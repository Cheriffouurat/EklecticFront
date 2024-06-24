import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicebackComponent } from './serviceback.component';

describe('ServicebackComponent', () => {
  let component: ServicebackComponent;
  let fixture: ComponentFixture<ServicebackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicebackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicebackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
