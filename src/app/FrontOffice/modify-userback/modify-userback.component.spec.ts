import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyUserbackComponent } from './modify-userback.component';

describe('ModifyUserbackComponent', () => {
  let component: ModifyUserbackComponent;
  let fixture: ComponentFixture<ModifyUserbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyUserbackComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifyUserbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
