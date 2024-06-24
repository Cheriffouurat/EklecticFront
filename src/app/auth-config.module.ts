import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthConfig} from "angular-oauth2-oidc"

issuer: String;
redirectUri: String;
clientId: String;
scope: String;
responseType: String;



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AuthConfigModule {}
export const authConfig: AuthConfig = {
  issuer: 'https://payment.eklectic.tn/API/oauth', // L'URL du serveur OAuth2
  redirectUri: window.location.origin + '/callback', // URL de redirection après authentification
  clientId: '41e1c5f4-11fe-11ef-9519-fa163e649851', // Identifiant client fourni par EklecticAPI
  scope: 'SENDBOX', // Portée des autorisations nécessaires
  responseType: 'code', // Type de réponse attendue (dans ce cas, un code d'autorisation)
};
