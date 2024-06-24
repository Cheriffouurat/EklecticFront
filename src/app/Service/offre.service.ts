import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "../Model/Service";
import {Observable} from "rxjs";
import {Image} from "../Model/Image";
import {ServicesType} from "../Model/ServicesType";
import {Offre} from "../Model/Offre";

@Injectable({
  providedIn: 'root'
})
export class OffreService { constructor(private Http:HttpClient) {}



  AddOffreToServiceType(offre: Offre, idServicetype: number): Observable<Offre> {
    return this.Http.put<Offre>("http://localhost:8086/ekProject/Offer/addAndassignServicetypeToOffre/" +idServicetype,offre)
  }
  AllOffre() {
  return this.Http.get<Offre[]>("http://localhost:8086/ekProject/Offer/allOffre" )
  }


}
