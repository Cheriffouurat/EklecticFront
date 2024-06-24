import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {UserServService} from "../../Service/user-serv.service";

@Component({
  selector: 'app-resetpwd',
  standalone: true,
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
  templateUrl: './resetpwd.component.html',
  styleUrl: './resetpwd.component.scss'
})
export class ResetpwdComponent {
  constructor(private _service:UserServService, private router:Router) { }



  email: string = '';

  ngOnInit(): void {
  }
  sendCode(): void {
    console.log('Email saisie par l\'utilisateur :', this.email);
    this._service.sendCode(this.email).subscribe(
      (response) => {
        console.log('Réponse de sendCode :', response);
        this.router.navigate(['newpassword']);
      },
      (error) => {
        console.error('Erreur lors de sendCode :', error);
      }
    );
  }



}
