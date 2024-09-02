import { Injectable } from '@angular/core';
import {Utilisateur} from "../Model/Utilisateur";
import {Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserServService {

  constructor(private _http:HttpClient) { }
  getAllUsers() : Observable<Utilisateur[]> {
    return this._http.get<Utilisateur[]>("http://localhost:8086/ekProject/User/retrieve-all-user");}

  getUser(id:number) : Observable<Utilisateur>{
    return this._http.get<Utilisateur>("http://localhost:8086/ekProject/User/GetUsrById/"+id);
  }

    getUserByUsername(Username:string) : Observable<Utilisateur>{
    return this._http.get<Utilisateur>("http://localhost:8086/ekProject/User/GetUsrByUsername/"+Username);
  }

  modifyUser(user:Utilisateur){
    return this._http.put(`http://localhost:8086/ekProject/User/ModifyUser`,user);
  }


  deleteUser(id:number){
    return this._http.delete ("http://localhost:8086/ekProject/User/remove-user/"+id);
  }

  sendCode(email: string): Observable<any> {
    return this._http.get<Utilisateur>("http://localhost:8086/ekProject/api/v1/auth/SendCode/" +email);
  }


    resetPassword(resetPassword: any): Observable<any> {
    return this._http.post('http://localhost:8086/ekProject/api/v1/auth/resetPassword', resetPassword);
  }


  register(utilisateur: Utilisateur): Observable<any> {
    const serializedUser = JSON.stringify(utilisateur);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this._http.post<any>("http://localhost:8086/ekProject/api/v1/auth/register", serializedUser, { headers });
  }

  registerOauth2(tel: string): Observable<any> {


    return this._http.get("http://localhost:8086/ekProject/api/v1/auth/Oauth2Registration/"+tel);
  }

  registerAdmin(utilisateur: Utilisateur, token: string): Observable<string> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });

    return this._http.post<string>("http://localhost:8086/ekProject/User/registerAdmin", utilisateur, { headers });
  }
}




