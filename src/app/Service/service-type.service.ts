import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Service} from "../Model/Service";
import {Observable} from "rxjs";
import {Image} from "../Model/Image";
import {ServicesType} from "../Model/ServicesType";

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {
  constructor(private Http: HttpClient) {
  }


  AllServiceType() {
    return this.Http.get<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/allservicesType")

  }
  AllServiceTypeByServiceType(id: number) {
    return this.Http.get<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/servicesTypesByServiceId/"+id)

  }

  GetOneServiceType(id: number) {
    return this.Http.get<ServicesType>("http://localhost:8086/ekProject/ServicesType/getServiceType/" + id)

  }

  AddServiceType(Service:ServicesType, idService: number) {
    const serializedST = JSON.stringify(Service);
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this.Http.put("http://localhost:8086/ekProject/ServicesType/addAndassignServiceToServiceType/" + idService,  serializedST, { headers });
  }

  FiltresDeToutesLesServicesTypesParPrixCroissant(serviceTypes: ServicesType[]): Observable<ServicesType[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.Http.post<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/FiltresDeToutesLesServicesTypesParPrixCroissant", serviceTypes, { headers });
  }
  FiltresDeToutesLesServicesTypesParPrixDecroisant(serviceTypes: ServicesType[]): Observable<ServicesType[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.Http.post<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/FiltresDeToutesLesServicesTypesParPrixDecroisant", serviceTypes, { headers });
  }
  FiltresDeToutesLesServicesTypesParNomcroisant(serviceTypes: ServicesType[]): Observable<ServicesType[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.Http.post<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/FiltresDeToutesLesServicesTypesParNomcroisant", serviceTypes, { headers });
  }
  FiltresDeToutesLesServicesTypesParNomDecroisant(serviceTypes: ServicesType[]): Observable<ServicesType[]> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.Http.post<ServicesType[]>("http://localhost:8086/ekProject/ServicesType/FiltresDeToutesLesServicesTypesParPrixDecroisant", serviceTypes, { headers });
  }

  DeleteServiceType(Id: number) {
    return this.Http.delete("http://localhost:8086/ekProject/ServicesType/deleteServiceType/" + Id);
  }

  addImageToServiceType(idService: number, image: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('image', image);

    return this.Http.put('http://localhost:8086/ekProject/ServicesType/addImageAndAssigToServiceType/' + idService, data);
  }

  Allimage() {
    return this.Http.get<Image[]>("http://localhost:8086/ekProject/Service/getALLImage")

  }
}
