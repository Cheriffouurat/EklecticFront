import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifycategorieComponent } from './modifycategorie.component';

describe('ModifycategorieComponent', () => {
  let component: ModifycategorieComponent;
  let fixture: ComponentFixture<ModifycategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifycategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifycategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
