import { Component } from '@angular/core';
import {Categorie} from "../../Model/Categorie";
import {CategorieServiceService} from "../../Service/categorie-service.service";
import {ServService} from "../../Service/serv.service";
import {Service} from "../../Model/Service";
import {ServiceTypeService} from "../../Service/service-type.service";
import {ServicesType} from "../../Model/ServicesType";
import {NgForOf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {AuthServiceService} from "../../Service/auth-service-.service";
import {Observable, of} from "rxjs";
import {HttpHeaders} from "@angular/common/http";

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

  constructor(private consumerProd:CategorieServiceService,private consumerServ:ServService,private consumerServiceTyoe:ServiceTypeService,private auth:AuthServiceService,private route:Router) { }
  ngOnInit() {

    this.consumerProd.AllCategorie().subscribe({next: (data) => this.listcategorie = data,
    });

    this.consumerServ.AllService().subscribe({next: (data) => this.listservice = data,
    });

    this.consumerServiceTyoe.AllServiceType().subscribe({next: (data) => {this.listserviceType = data;
      }
    });



  }
  // onLogout(): void {
  //   this.auth.Deconnexion().subscribe(
  //     response => {
  //       console.log('Logout successful', response);
  //       // Vous pouvez ajouter des actions supplémentaires ici si nécessaire
  //     },
  //     error => {
  //       console.error('Logout failed', error);
  //       // Vous pouvez ajouter des actions supplémentaires ici si nécessaire
  //     }
  //   );
  // }

  deconnexion() {
    localStorage.clear();
    this.route.navigateByUrl("/connexion");
  }

}
