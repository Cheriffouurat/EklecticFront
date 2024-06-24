import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../Model/Utilisateur";
import {LoginServiceService} from "../../Service/login-service.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-logins',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './logins.component.html',
  styleUrl: './logins.component.scss'
})
export class LoginsComponent  {

  auth: { email: string, password: string } = { email: '', password: '' };

  constructor(private _service:LoginServiceService, private router:Router) { }

  ngOnInit(): void {
  }
  // login(){
  //   return this._service.authenticateUser(this.auth).subscribe( data => {
  //     this.router.navigate(['']);
  //   });
  // }
}
