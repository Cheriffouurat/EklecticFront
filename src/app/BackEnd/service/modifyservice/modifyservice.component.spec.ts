import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyserviceComponent } from './modifyservice.component';

describe('ModifyserviceComponent', () => {
  let component: ModifyserviceComponent;
  let fixture: ComponentFixture<ModifyserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyserviceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
