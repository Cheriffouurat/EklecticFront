import {Image} from "./Image";
import {Service} from "./Service"
import {ServiceTypeEnum} from "./ServiceTypeEnum";
import {Offre} from "./Offre";

export class ServicesType{
  id!:number;
  prix!:number;
  nom!:string;
  description!:string;
  gateway!:string;
  date!:Date;
  service!:Service;
  periode!:ServiceTypeEnum[];
  prixApresOffer!:number;
  onOffer!:boolean;
  image!:Image;
  offres!:Offre[];
  constructor() {
  }

}
