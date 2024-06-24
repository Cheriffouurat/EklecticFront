import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Utilisateur} from "../Model/Utilisateur";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  user!:Observable<Utilisateur>;
  constructor(private http: HttpClient,) { }

  authenticateUser(request: any): Observable<{ access_token: string }> {
    return this.http.post<{ access_token: string }>("http://localhost:8086/ekProject/api/v1/auth/authenticate", request);
  }

}
