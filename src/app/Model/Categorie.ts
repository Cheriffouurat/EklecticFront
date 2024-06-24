import {Service} from "./Service";
import {Image} from "./Image";

export class Categorie {
  idCategorie!:number;
  name!:String;
  description!:String;
  Services!:Service[];
  image!:Image;

}
