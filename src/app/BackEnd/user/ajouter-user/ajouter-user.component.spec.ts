import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterUSERComponent } from './ajouter-user.component';

describe('AjouterUSERComponent', () => {
  let component: AjouterUSERComponent;
  let fixture: ComponentFixture<AjouterUSERComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AjouterUSERComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterUSERComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
