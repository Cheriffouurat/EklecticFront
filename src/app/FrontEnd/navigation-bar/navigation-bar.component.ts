import { Component } from '@angular/core';
import {Categorie} from "../../Model/Categorie";
import {CategorieServiceService} from "../../Service/categorie-service.service";
import {ServService} from "../../Service/serv.service";
import {Service} from "../../Model/Service";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ServicesType} from "../../Model/ServicesType";
import {NgForOf} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
  listcategorie!:Categorie[];
  listservice!:Service[];
  listserviceType!:ServicesType[];

  constructor(private consumerProd:CategorieServiceService,private consumerServ:ServService,private consumerServiceTyoe:ServiceTypeService) { }
  ngOnInit() {

    this.consumerProd.AllCategorie().subscribe({next: (data) => this.listcategorie = data,
    });

    this.consumerServ.AllService().subscribe({next: (data) => this.listservice = data,
    });

    this.consumerServiceTyoe.AllServiceType().subscribe({next: (data) => {this.listserviceType = data;
      }
    });

  }
}
