import {Component, OnInit} from '@angular/core';
import {AuthServiceService} from "../../Service/auth-service-.service";
import {TokenResponse} from "angular-oauth2-oidc";
import {ActivatedRoute} from "@angular/router";
import {jwtDecode} from "jwt-decode";

@Component({
  selector: 'app-callback',
  standalone: true,
  imports: [],
  templateUrl: './callback.component.html',
  styleUrl: './callback.component.scss'
})
export class CallbackComponent implements OnInit   {
  msisdn: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthServiceService) {

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

          },
          error => {
            console.error('Error retrieving access token', error);
          }
        );
      }
    });



    // Testez la méthode registerOauth2
    this.authService.registerOauth2(this.msisdn).subscribe({
      next: response => {
        console.log('Utilisateur enregistré avec succès:', response);
      },
      error: error => {
        console.error('Erreur lors de l\'enregistrement:', error);
      }
    });
  }



}
