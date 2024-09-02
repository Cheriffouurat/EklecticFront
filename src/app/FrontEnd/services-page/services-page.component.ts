import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ServicesType} from "../../Model/ServicesType";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {Observable} from "rxjs";
import {ConsoleLogger} from "@angular/compiler-cli";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [
    NavigationBarComponent,
    NgForOf,
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './services-page.component.html',
  styleUrl: './services-page.component.scss'
})
export class ServicesPageComponent {
  serviceType!:ServicesType[]
  specialServiceId:number=2;
  p: number = 1;  // Page actuelle
  pageSize: number = 10;  // Nombre d'éléments par page
  totalPages: number = 1;  // Nombre total de pages
  pagedItems: ServicesType[] = [];

  constructor(private ServType: ServiceTypeService , private route: ActivatedRoute ,private router:Router) {}

  ngOnInit(): void {



    this.ServType.AllServiceType().subscribe({
      next: (data) => {
        this.serviceType = data;
        console.log(this.serviceType);
        this.totalPages = Math.ceil(this.serviceType.length / this.pageSize);
        this.updatePagedItems();

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

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.p = page;
    }
  }

  get pages(): number[] {
    return Array(this.totalPages).fill(0).map((_, i) => i + 1);
  }
  private updatePagedItems(): void {
    const start = (this.p - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.pagedItems = this.serviceType.slice(start, end);
  }

  loginWithOAuth2() {
    const clientId = '41e1c5f4-11fe-11ef-9519-fa163e649851';
    const redirectUri = encodeURIComponent('http://localhost:4200/#/HomePage');
    const responseType = 'code';
    const scope = 'SENDBOX';
    const authorizationUri = 'https://payment.eklectic.tn/API/oauth/user/authorize';

    const authorizationUrl = `${authorizationUri}?response_type=${responseType}&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}`;

    window.location.href = authorizationUrl;
  }



  toggleSortDirection() {
    // Logique pour changer la direction du tri (ascendant/descendant)
  }

}
