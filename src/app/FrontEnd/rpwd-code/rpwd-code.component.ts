import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserServService} from "../../Service/user-serv.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-rpwd-code',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './rpwd-code.component.html',
  styleUrl: './rpwd-code.component.scss'
})
export class RpwdCodeComponent {
  rpwd: { verificationCode: string, newPassword: string } = { verificationCode: '', newPassword: '' };
  constructor(private _service:UserServService, private router:Router) { }

  resetPassword(): void {
    this._service.resetPassword(this.rpwd).subscribe(
      (response) => {
        console.log('Réponse de resetPassword :', response);
        // Traitez la réponse ici
      },
      (error) => {
        console.error('Erreur lors de resetPassword :', error);
        // Traitez l'erreur ici
      }
    );
  }

}
