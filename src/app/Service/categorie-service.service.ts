import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Categorie} from "../Model/Categorie";
import {Observable} from "rxjs";
import {Image} from "../Model/Image";

@Injectable({
  providedIn: 'root'
})
export class CategorieServiceService {

  constructor(private Http:HttpClient) {}
  AllCategorie(){
    return this.Http.get<Categorie[]>("http://localhost:8086/ekProject/Categorie/allCategories")

  }
  GetOneCategorie(id:number){
    return this.Http.get<Categorie>("http://localhost:8086/ekProject/Categorie/getCategorie/"+id)

  }
  AddCategorie(categorie:Categorie){
    return this.Http.put("http://localhost:8086/ekProject/Categorie/addCategorie",categorie)
  }
  ModifyCategorie(categorie:Categorie){
    return this.Http.put("http://localhost:8086/ekProject/Categorie/updateCategorie",categorie)
  }

  DeleteCategorie(IdCategorie :number){
    return this.Http.delete("http://localhost:8086/ekProject/Categorie/deleteCategorie"+ IdCategorie);
  }
  addImageToCatigorie(idCategorie: string, image: File): Observable<any> {
    const data: FormData = new FormData();
    data.append('image', image);

    return this.Http.post('http://localhost:8188/SpringMVC/Forum/addImageAndAssigToPost' + idCategorie, data);
  }
  Allimage(){
    return this.Http.get<Image[]>("http://localhost:8086/ekProject/Categorie/getALLImage")

  }

}
