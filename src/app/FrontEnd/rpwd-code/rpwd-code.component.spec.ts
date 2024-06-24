import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpwdCodeComponent } from './rpwd-code.component';

describe('RpwdCodeComponent', () => {
  let component: RpwdCodeComponent;
  let fixture: ComponentFixture<RpwdCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RpwdCodeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RpwdCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
