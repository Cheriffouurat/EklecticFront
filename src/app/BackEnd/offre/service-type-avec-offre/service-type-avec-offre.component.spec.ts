import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceTypeAvecOffreComponent } from './service-type-avec-offre.component';

describe('ServiceTypeAvecOffreComponent', () => {
  let component: ServiceTypeAvecOffreComponent;
  let fixture: ComponentFixture<ServiceTypeAvecOffreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiceTypeAvecOffreComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiceTypeAvecOffreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
