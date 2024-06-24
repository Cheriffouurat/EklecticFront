import { Component } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {Router, RouterLink} from "@angular/router";
import {UserServService} from "../../Service/user-serv.service";
import {Utilisateur} from "../../Model/Utilisateur";
import {HttpHeaders} from "@angular/common/http";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.scss'
})
export class InscriptionComponent {
  defaultValue: string = "Valeur par défaut";
  // User: { Username: string,email: string,Phonenumber: string, Password: string } = {  Username: '',email: '', Phonenumber: '' ,Password: ''};

     User:Utilisateur=new Utilisateur();
  constructor(private _service:UserServService, private router:Router) {

  }
  ngOnInit(): void {
  }

  registerUtilisateur(): void {
    // Check if the form is valid


      this._service.register(this.User).subscribe({
      next: response => {
        this.router.navigate(['/connexion']);
      },
      error: err => {
        // Traitement en cas d'erreur
        console.error('Erreur lors de l\'enregistrement de l\'utilisateur :', err);
        console.log('Error Response:', err.error);
        console.log("mot de passe",this.User.password)

      }
    });
  }

}
