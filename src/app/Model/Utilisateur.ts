import {Role} from "./Role";

export class Utilisateur {
  id!:number;
  username!:string;
  email !:string;
  password !:string;
  phonenumber !:number;
  CodeVerification!:string;
  loyaltyPoints!:number;
  role!:Role;
  authorities!: string[];
  dateEndCode!:Date;
  userId?: number;
  abonnements?: any[];
  constructor() {
    this.password = '';
  }







}
