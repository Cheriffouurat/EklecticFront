import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserbackComponent } from './userback.component';

describe('UserbackComponent', () => {
  let component: UserbackComponent;
  let fixture: ComponentFixture<UserbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
