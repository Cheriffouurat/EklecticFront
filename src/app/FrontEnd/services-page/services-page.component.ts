import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ServicesType} from "../../Model/ServicesType";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ConsoleLogger} from "@angular/compiler-cli";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf,
    NgIf,
    RouterLink
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  serviceType!:ServicesType[];
  constructor(private ServType: ServiceTypeService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {



    this.ServType.AllServiceType().subscribe({
      next: (data) => {
        this.serviceType = data;
        console.log(this.serviceType);
      }
    });

  }
  aUnePromotion(servicetype: any): boolean {
    return servicetype.prixApresOffer != null && servicetype.prixApresOffer !== 0;
  }

  // Méthode pour calculer le prix à afficher
  prixAAfficher(servicetype: any): number {
    return this.aUnePromotion(servicetype) ? servicetype.prixApresOffer : servicetype.prix;
  }
  filtrerParPrixCroissant(): void {
    this.ServType.FiltresDeToutesLesServicesTypesParPrixCroissant(this.serviceType).subscribe({
      next: (data) => this.serviceType = data
    });
  }
  filtrerParPrixDecroisant(): void {
    this.ServType.FiltresDeToutesLesServicesTypesParPrixDecroisant(this.serviceType).subscribe({
      next: (data) => this.serviceType = data
    });
  }
  filtrerParNomCroisant(): void {
    this.ServType.FiltresDeToutesLesServicesTypesParPrixCroissant(this.serviceType).subscribe({
      next: (data) => this.serviceType = data
    });
  }
  filtrerParNomDecroisant(): void {
    this.ServType.FiltresDeToutesLesServicesTypesParPrixDecroisant(this.serviceType).subscribe({
      next: (data) => this.serviceType = data
    });
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

  toggleSortDirection() {
    // Logique pour changer la direction du tri (ascendant/descendant)
  }

}
