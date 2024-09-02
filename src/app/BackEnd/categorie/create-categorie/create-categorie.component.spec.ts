import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { ButtonModule, CardModule, ModalModule, TooltipModule } from '@coreui/angular';
import { IconSetService } from '@coreui/icons-angular';
import { iconSubset } from '../../../icons/icon-subset';
import { CreateCategorieComponent } from './create-categorie.component';

describe('CreateCategorieComponent', () => {
  let component: CreateCategorieComponent;
  let fixture: ComponentFixture<CreateCategorieComponent>;
  let iconSetService: IconSetService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCategorieComponent],
      imports: [
        ModalModule,
        NoopAnimationsModule,
        FormsModule,
        ButtonModule,
        CardModule,
        RouterTestingModule,
        TooltipModule
      ],

    })
      .compileComponents();
  });

  beforeEach(() => {
    iconSetService = TestBed.inject(IconSetService);
    iconSetService.icons = { ...iconSubset };

    fixture = TestBed.createComponent(CreateCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display modal when confirmAddCategorie is called', () => {
    // Call the method that triggers the modal
    component.confirmAddCategorie();

    // Trigger change detection
    fixture.detectChanges();

    // Check if modal is visible
    const modal = fixture.nativeElement.querySelector('#liveDemoModal');
    expect(modal).toBeTruthy();
    expect(component.liveDemoVisible).toBeTrue();
  });
});
