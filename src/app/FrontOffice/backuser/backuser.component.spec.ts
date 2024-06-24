import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackuserComponent } from './backuser.component';

describe('BackuserComponent', () => {
  let component: BackuserComponent;
  let fixture: ComponentFixture<BackuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BackuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BackuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
