import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {Service} from "../../Model/Service";
import {ActivatedRoute, Router} from "@angular/router";
import {ServicesType} from "../../Model/ServicesType";
import {ServiceTypeService} from "../../Service/service-type.service";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-servicetype-par-service',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './servicetype-par-service.component.html',
  styleUrl: './servicetype-par-service.component.scss'
})
export class ServicetypeParServiceComponent {
  id!:number;
  serviceTypeByService!:ServicesType[];
  constructor(private  serviceType:ServiceTypeService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.serviceType.AllServiceTypeByServiceType(this.id).subscribe({
      next: (data) => this.serviceTypeByService = data

    });
  }
  aUnePromotion(servicetype: any): boolean {
    return servicetype.prixApresOffer != null && servicetype.prixApresOffer !== 0;
  }

  onSortChange(event: any) {
    const selectedSort = event.target.value;
    if (selectedSort === 'price') {
      this.filtrerParPrixCroissant();
    }
    else if (selectedSort === 'price2') {
      this.filtrerParPrixDecroisant();
    }
    else if (selectedSort === 'name') {
      this.filtrerParNomCroisant();
    }
    else if (selectedSort === 'name2') {
      this.filtrerParNomDecroisant();
    }
  }
  filtrerParPrixCroissant(): void {
    this.serviceType.FiltresDeToutesLesServicesTypesParPrixCroissant(this.serviceTypeByService).subscribe({
      next: (data) => this.serviceTypeByService = data
    });
  }
  filtrerParPrixDecroisant(): void {
    this.serviceType.FiltresDeToutesLesServicesTypesParPrixDecroisant(this.serviceTypeByService).subscribe({
      next: (data) => this.serviceTypeByService = data
    });
  }
  filtrerParNomCroisant(): void {
    this.serviceType.FiltresDeToutesLesServicesTypesParPrixCroissant(this.serviceTypeByService).subscribe({
      next: (data) => this.serviceTypeByService = data
    });
  }
  filtrerParNomDecroisant(): void {
    this.serviceType.FiltresDeToutesLesServicesTypesParPrixDecroisant(this.serviceTypeByService).subscribe({
      next: (data) => this.serviceTypeByService = data
    });
  }

}
