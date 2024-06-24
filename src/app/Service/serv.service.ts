import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Service} from "../Model/Service";
import {Observable} from "rxjs";
import {Image} from "../Model/Image";

@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(private Http:HttpClient) {}
  AllService(){
    return this.Http.get<Service[]>(" http://localhost:8086/ekProject/service/allservices")

  }
  AllServiceByCategorie(id: number) {
    return this.Http.get<Service[]>("http://localhost:8086/ekProject/service/servicesByCategory/"+id)

  }
  GetOneService(id:number){
    return this.Http.get<Service>("http://localhost:8086/ekProject/service/getService/"+id)

  }
  AddService(Service:Service,idcategorie:number){
    return this.Http.put(" http://localhost:8086/ekProject/service/addAndassignCategorieToService/" +idcategorie,Service)
  }
  ModifierService(Service:Service){
    return this.Http.put("http://localhost:8086/ekProject/service/updateservice" ,Service)
  }
  AddService2(Service:Service){
    return this.Http.post("http://localhost:8086/ekProject/service/addservice2",Service)
  }

  DeleteService(IdService :number){
    return this.Http.delete("http://localhost:8086/ekProject/service/deleteService/"+ IdService);
  }
  addImageToService(idService: number, image: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('image', image);

    return this.Http.put('http://localhost:8086/ekProject/service/addImageAndAssigToService/' + idService, data);
  }
  AddAndUpdateImageToService(idService: number, image: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('image', image);

    return this.Http.put('http://localhost:8086/ekProject/service/SaveAndAssaignImagetoService/ ' + idService, data);
  }



  Allimage(){
    return this.Http.get<Image[]>("http://localhost:8086/ekProject/Service/getALLImage")

  }

}
