import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyServiceTypeComponent } from './modify-service-type.component';

describe('ModifyServiceTypeComponent', () => {
  let component: ModifyServiceTypeComponent;
  let fixture: ComponentFixture<ModifyServiceTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyServiceTypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyServiceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
