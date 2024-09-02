import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserServService} from "../../Service/user-serv.service";
import {Utilisateur} from "../../Model/Utilisateur";
import {HttpHeaders} from "@angular/common/http";
import {NgClass, NgIf} from "@angular/common";
import {AuthServiceService} from "../../Service/auth-service-.service";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
    NgIf
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  defaultValue: string = "Valeur par défaut";
  // User: { Username: string,email: string,Phonenumber: string, Password: string } = {  Username: '',email: '', Phonenumber: '' ,Password: ''};
  errorMessage: string;

     User:Utilisateur=new Utilisateur();
  constructor(private _service:UserServService, private router:Router,private authService:AuthServiceService) {
    this.errorMessage = '';
  }
   msisdn: string = '123';
  ngOnInit(): void {
    this.authService.registerOauth2(this.msisdn).subscribe({
      next: response => {
        console.log('Utilisateur enregistré avec succès:', response);
      },
      error: error => {
        console.error('Erreur lors de l\'enregistrement:', error);
      }
    });
  }


  registerUtilisateur(): void {
    this._service.register(this.User).subscribe({
      next: response => {
        this.router.navigate(['/connexion']);
      },
      error: err => {
        // Check if the error status is 409 (Conflict)
        if (err.status === 409) {
          // Display the error message from the backend
          this.errorMessage = err.error;
        } else {
          // Handle other errors
          this.errorMessage = 'Une erreur s\'est produite lors de l\'enregistrement.';
        }
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', err);
      }
    });
  }

}
