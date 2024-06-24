import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePageParCategorieComponent } from './service-page-par-categorie.component';

describe('ServicePageParCategorieComponent', () => {
  let component: ServicePageParCategorieComponent;
  let fixture: ComponentFixture<ServicePageParCategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicePageParCategorieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServicePageParCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
