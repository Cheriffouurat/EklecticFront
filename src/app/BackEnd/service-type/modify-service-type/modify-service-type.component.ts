import { Component } from '@angular/core';
import {CardBodyComponent, CardComponent, CardHeaderComponent} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {Service} from "../../../Model/Service";
import {Categorie} from "../../../Model/Categorie";
import {ServicesType} from "../../../Model/ServicesType";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServiceTypeService} from "../../../Service/service-type.service";
import {ServService} from "../../../Service/serv.service";
import {ServiceTypeEnumArray} from "../../../Model/ServiceTypeEnum";

@Component({
  selector: 'app-modify-service-type',
  standalone: true,
    imports: [
        CardBodyComponent,
        CardComponent,
        CardHeaderComponent,
        FormsModule,
        NgForOf,
        ReactiveFormsModule
    ],
  templateUrl: './modify-service-type.component.html',
  styleUrl: './modify-service-type.component.scss'
})
export class ModifyServiceTypeComponent {
  id!:number;
  serviceType!:ServicesType;
  listService!:Service[];
  Servieceid!:number;
  constructor(private ServiceType:ServiceTypeService,private ServService: ServService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.ServiceType.GetOneServiceType(this.id).subscribe({
      next: (data) => this.serviceType = data

    });
    this.ServService.AllService().subscribe({
      next: (data) => this.listService = data
    });
  }




  ModifierServiceType(){
    this.ServiceType.AddServiceType(this.serviceType,this.Servieceid).subscribe(()=>this.router.navigateByUrl("/TypeService/ServicetypeBack"));
  }


  protected readonly ServiceTypeEnumArray = ServiceTypeEnumArray;
}
