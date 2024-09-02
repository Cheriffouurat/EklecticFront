import { Injectable } from '@angular/core';
import {OAuthService, TokenResponse} from "angular-oauth2-oidc";
import {authConfig} from "../auth-config.module";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";
import {Utilisateur} from "../Model/Utilisateur";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private tokenUrl = 'https://payment.eklectic.tn/API/oauth/token';
  private clientId = '41e1c5f4-11fe-11ef-9519-fa163e649851';
  private clientSecret = 'fce694ba70c842ef7aa6cd14256455d8';
  private apiUrl = 'http://localhost:8086/api/v1/auth/Oauth2.0Registration';


  constructor(private http: HttpClient) {}

  getToken(code: string): Observable<TokenResponse> {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)

      .set('client_id', this.clientId)
      .set('client_secret', this.clientSecret);

    return this.http.post<any>(this.tokenUrl, body);
  }

  registerOauth2(tel: string): Observable<any> {


    return this.http.get("http://localhost:8086/api/v1/auth/Oauth2Registration/"+"885652");
  }
  Deconnexion(): Observable<any> {
    const token = localStorage.getItem('token'); // Récupérer le token du stockage local
    if (!token) {
      console.warn('No token found in local storage.');
      // Redirection vers la page de connexion
      return of(null); // Retourner un observable vide ou une valeur par défaut
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post("http://localhost:8086/ekProject/api/v1/auth/logout", {}, { headers }).pipe(

      tap(() => {
        // Nettoyer le local storage après la déconnexion réussie
        localStorage.clear();
        console.log('Déconnexion réussie');
        // Redirection après déconnexion réussie
      }),
      catchError(error => {
        console.error('Erreur lors de la déconnexion', error);
        return of(null); // Retourner un observable vide ou une valeur par défaut en cas d'erreur
      })
    );
  }
}
