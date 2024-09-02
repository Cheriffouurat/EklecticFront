import {Component, OnInit} from '@angular/core';
import {
    ButtonCloseDirective,
    ButtonDirective,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ServService} from "../../../Service/serv.service";
import {Router} from "@angular/router";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {Service} from "../../../Model/Service";
import {subscriptionLogsToBeFn} from "rxjs/internal/testing/TestScheduler";
import {ServiceTypeService} from "../../../Service/service-type.service";
import {ServicesType} from "../../../Model/ServicesType";
import {Categorie} from "../../../Model/Categorie";
import {ServiceTypeEnum, ServiceTypeEnumArray} from "../../../Model/ServiceTypeEnum";
import {NgForOf, NgIf} from "@angular/common";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-create-service-type',
  standalone: true,
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        FormsModule,
        ReactiveFormsModule,
        NgForOf,
        ButtonCloseDirective,
        ButtonDirective,
        ModalBodyComponent,
        ModalComponent,
        ModalFooterComponent,
        ModalHeaderComponent,
        ModalTitleDirective,
        NgIf
    ],
  templateUrl: './create-service-type.component.html',
  styleUrl: './create-service-type.component.scss'
})
export class CreateServiceTypeComponent implements OnInit{
  listService!:Service[];
  serviceId!:number;
  ServiceType!:ServicesType;
  Periode!:ServiceTypeEnum
  public liveDemoVisible = false;


  constructor(private consumerType:ServiceTypeService,private route:Router,private Service:ServService) { }
  ngOnInit() {
    this.ServiceType=new ServicesType;
    console.log("prix",this.ServiceType.prix);
    console.log("TR",this.ServiceType.onOffer);






    this.Service.AllService().subscribe({next: (data) => this.listService = data,
    });

  }
  confirmAddServiceType() {
    this.toggleLiveDemo();
  }

  // Méthode pour soumettre le type de service après confirmation
  submitServiceType() {
    this.consumerType.AddServiceType(this.ServiceType, this.serviceId).subscribe(
      () => {
        console.log('Service Type créé avec succès !');
        this.route.navigateByUrl('/TypeService/ServicetypeBack');
        this.toggleLiveDemo(); // Fermer le modal après soumission
      },
      (error) => {
        console.log('Erreur lors de la création du service:', error);
      }
    );
  }

  toggleLiveDemo() {
    this.liveDemoVisible = !this.liveDemoVisible;
    console.log(this.liveDemoVisible);
  }

  handleLiveDemoChange(event: boolean) {
    this.liveDemoVisible = event;
    console.log(this.liveDemoVisible);
  }


  protected readonly Object = Object;
  protected readonly ServiceTypeEnum = ServiceTypeEnum;
  protected readonly ServiceTypeEnumArray = ServiceTypeEnumArray;
}
{


}
