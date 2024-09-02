import {Role} from "./Role";

export class Utilisateur {
  id!:number;
  username!:string;
  email !:string;
  password !:string;
  phonenumber !:string;
  CodeVerification!:string;
  loyaltyPoints!:number;
  role!:Role;
  authorities!: string[];
  dateEndCode!:Date;

  abonnements?: any[];
  constructor() {
    this.password = '';
  }







}
