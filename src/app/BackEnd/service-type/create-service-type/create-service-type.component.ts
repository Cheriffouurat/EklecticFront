import {Component, OnInit} from '@angular/core';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
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
import {NgForOf} from "@angular/common";
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
    NgForOf
  ],
  templateUrl: './create-service-type.component.html',
  styleUrl: './create-service-type.component.scss'
})
export class CreateServiceTypeComponent implements OnInit{
  listService!:Service[];
  serviceId!:number;
  ServiceType!:ServicesType;
  Periode!:ServiceTypeEnum;

  constructor(private consumerType:ServiceTypeService,private route:Router,private Service:ServService) { }
  ngOnInit() {
    this.ServiceType=new ServicesType;
    console.log("prix",this.ServiceType.prix);
    console.log("TR",this.ServiceType.onOffer);






    this.Service.AllService().subscribe({next: (data) => this.listService = data,
    });

  }

  addServiceType(): void {


          this.consumerType.AddServiceType(this.ServiceType,this.serviceId).subscribe(
            () => {
              this.route.navigateByUrl('/TypeService/ServicetypeBack');
            },
            (error) => {
              console.log('Erreur lors de la création du service:', error);
            }
          );

  }











  protected readonly Object = Object;
  protected readonly ServiceTypeEnum = ServiceTypeEnum;
  protected readonly ServiceTypeEnumArray = ServiceTypeEnumArray;
}
{


}
