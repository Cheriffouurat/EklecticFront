import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import * as jwt_decode from 'jwt-decode';
import {jwtDecode} from "jwt-decode";
import {Utilisateur} from "../../../Model/Utilisateur";
import {CategorieServiceService} from "../../../Service/categorie-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4);
  public newTasks = new Array(5);
  public newNotifications = new Array(5);

  username: string | undefined;
  constructor(private classToggler: ClassToggleService,private route:Router) {
    super();
  }


  ngOnInit(): void {
    this.loadAndDecodeToken();
  }

  private loadAndDecodeToken(): void {
    const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
    if (token) {
      try {

        let decodedToken: any = jwtDecode(token); // Utiliser 'any' pour le type du token décodé

        (typeof decodedToken === 'object' && decodedToken.hasOwnProperty('sub'))  // Vérifier que le jeton est un objet avec une propriété 'sub'
          this.username = decodedToken.sub
        console.log(this.username)
      } catch (error) {
        console.error('Token decoding failed', error);
      }
    } else {
      console.warn('No token found');
    }
  }
  deconnecter() {
    localStorage.clear();
    this.route.navigateByUrl("/connexion");
  }
}
