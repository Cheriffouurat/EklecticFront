import { Injectable } from '@angular/core';
import {OAuthService} from "angular-oauth2-oidc";
import {authConfig} from "../auth-config.module";

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {


  constructor(private oauthService: OAuthService) {
    this.configure();
  }

  private configure() {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
  }

  login() {
    this.oauthService.initLoginFlow();
  }

  logout() {
    this.oauthService.logOut();
  }

  getToken() {
    return this.oauthService.getAccessToken();
  }

  isLoggedIn() {
    return this.oauthService.hasValidAccessToken();
  }
}
