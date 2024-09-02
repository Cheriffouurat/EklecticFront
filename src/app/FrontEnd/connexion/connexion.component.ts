import { Component } from '@angular/core';
import {LoginServiceService} from "../../Service/login-service.service";
import {Router, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import jwt_decode from "jwt-decode";
import {jwtDecode} from "jwt-decode";
import {UserServService} from "../../Service/user-serv.service";
import {Role} from "../../Model/Role";
import {Utilisateur} from "../../Model/Utilisateur";
import {AuthServiceService} from "../../Service/auth-service-.service";
import {TokenResponse} from "angular-oauth2-oidc";
@Component({
  selector: 'app-connexion',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.scss'
})

export class ConnexionComponent {

  auth: { email: string, password: string } = { email: '', password: '' };
  user: Utilisateur = new Utilisateur()

  constructor(private _service:LoginServiceService,private userService:UserServService,private router:Router) { }

  ngOnInit(): void {
  }
  // login(){
  //   return this._service.authenticateUser(this.auth).subscribe(token => {
  //     if (token) {
  //       localStorage.setItem('jwtToken', token);
  //       this.router.navigate(['/dashboard']);
  //     }
  //   });
  //
  // }

  login() {
    this._service.authenticateUser(this.auth).subscribe(data => {
      if (data && data.access_token) {
        localStorage.setItem('token', data.access_token); // Stocker le jeton dans le local storage

        const token = localStorage.getItem('token'); // Récupérer le jeton depuis le local storage
console.log("token",token)
        if (token) {
          let decodedToken: any = jwtDecode(token); // Utiliser 'any' pour le type du token décodé

          if (typeof decodedToken === 'object' && decodedToken.hasOwnProperty('sub')) { // Vérifier que le jeton est un objet avec une propriété 'sub'
            const username: string = decodedToken.sub; // Extraire le nom d'utilisateur du jeton

            if (username) {
              // Appeler la méthode pour trouver l'utilisateur par son nom d'utilisateur
              this.userService.getUserByUsername(username).subscribe((user: Utilisateur) => {
                console.log('Contenu de user :', user);
                console.log('Contenu de user role  :', user.role);


                if (user && user.role) { // Assurez-vous que l'utilisateur et son rôle sont définis
                  if (user.role =="USER") {
                    // Redirection vers la page d'accueil si le rôle est "USER"
                    this.router.navigate(['/HomePage']);
                  } else if (user.role =="ADMIN") {
                    // Redirection vers le tableau de bord si le rôle est "ADMIN"
                    this.router.navigate(['/dashboard']);
                  } else {
                    // Redirection vers une page par défaut si le rôle n'est ni "USER" ni "ADMIN"
                    this.router.navigate(['/defaultpage']);
                  }
                } else {
                  // Gérer le cas où le rôle de l'utilisateur n'est pas défini dans la réponse
                  console.error("Role not found in user details.");
                }
              }, (error: any) => {
                // Gérer les erreurs lors de la récupération des détails de l'utilisateur
                console.error("Error fetching user details:", error);
              });
            } else {
              // Gérer le cas où le nom d'utilisateur est manquant dans le jeton
              console.error("Username missing in decoded token.");
            }
          } else {
            // Gérer le cas où le jeton n'est pas un objet valide
            console.error("Invalid token: must be an object with 'sub' property.");
          }
        } else {
          // Gérer le cas où le jeton est manquant dans le local storage
          console.error("Token not found in local storage.");
        }
      } else {
        // Gérer le cas où les données de connexion sont manquantes ou incomplètes
        console.error("Invalid or incomplete authentication data.");
      }
    }, (error: any) => {
      // Gérer les erreurs lors de l'authentification de l'utilisateur
      console.error("Error authenticating user:", error);
    });
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
}


