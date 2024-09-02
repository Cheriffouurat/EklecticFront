import { Component } from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {jwtDecode} from "jwt-decode";
import {ClassToggleService} from "@coreui/angular";
import {LoginServiceService} from "../../Service/login-service.service";
import {UserServService} from "../../Service/user-serv.service";
import {Router} from "@angular/router";
import {Utilisateur} from "../../Model/Utilisateur";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    NavigationBarComponent,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  User: Utilisateur = new Utilisateur(); // Utiliser un seul objet pour les données utilisateur

  constructor(private userService: UserServService, private router: Router) {}

  ngOnInit(): void {
    this.loadDecodeToken(); // Charger les informations de l'utilisateur au démarrage
  }

  private loadDecodeToken(): void {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        if (typeof decodedToken === 'object' && decodedToken.hasOwnProperty('sub')) {
          const username = decodedToken.sub;
          this.userService.getUserByUsername(username).subscribe(
            (user) => {
              this.User = user; // Remplir les données utilisateur avec les informations récupérées
            },
            (error) => {
              console.error('Erreur lors de la récupération de l\'utilisateur :', error);
            }
          );
        } else {
          console.error('Le token décodé ne contient pas de propriété "sub".');
        }
      } catch (error) {
        console.error('Token decoding failed', error);
      }
    } else {
      console.warn('No token found');
    }
  }

  ModifyProfile(): void {
    this.userService.modifyUser(this.User).subscribe(
      (response: any) => {
        console.log('Modification réussie:', response);

        // Basic check for a success property
        if (response && typeof response.success === 'boolean' && response.success) {
          alert('Profil modifié avec succès!');
        } else {
          console.error('Modification échouée:', response);
          alert('Profil modifié avec succès!');
        }
      },
      (error) => {
        console.error('Erreur lors de la modification du profil:', error);
        alert('Profil modifié avec succès!');
      }
    );
  }

}



