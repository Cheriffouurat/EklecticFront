import {Component, OnInit} from '@angular/core';
import {NavigationBarComponent} from "../navigation-bar/navigation-bar.component";
import {ActivatedRoute} from "@angular/router";
import {AuthServiceService} from "../../Service/auth-service-.service";
import {jwtDecode} from "jwt-decode";
import {Utilisateur} from "../../Model/Utilisateur";
import {Role} from "../../Model/Role";
import {UserServService} from "../../Service/user-serv.service";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    NavigationBarComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  msisdn: string = '';
  User:Utilisateur=new Utilisateur();

  constructor(private route: ActivatedRoute, private authService: AuthServiceService,private UserServService: UserServService) {

  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code = params['code'];
      if (code) {
        this.authService.getToken(code).subscribe(


          response => {
            const accessToken = response.access_token;

            // Enregistrez le token dans le localStorage
            localStorage.setItem('accessToken', accessToken);

            // Décoder le token
            const decodedToken: any = jwtDecode(accessToken);
            console.log('Decoded Token:', decodedToken);

            // Obtenez le msisdn ou toute autre information
             this.msisdn = decodedToken.msisdn;
            console.log('MSISDN:',this.msisdn );
            this.User.phonenumber=this.msisdn

            console.log(this.User.phonenumber)

            this.UserServService.registerOauth2("192000").subscribe({

              next: response => {
                console.log('Utilisateur enregistré avec succès:', response);
              },
              error: error => {
                console.error('Erreur lors de l\'enregistrement:', error);
              }
            });

          },
          error => {
            console.error('Error retrieving access token', error);
          }
        );
      }
    });


    // Testez la méthode registerOauth2

  }

}
