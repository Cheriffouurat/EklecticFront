import { Component } from '@angular/core';
import {
  ButtonCloseDirective,
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  FormCheckComponent, FormControlDirective, FormDirective, FormLabelDirective, FormSelectDirective,
  ModalBodyComponent,
  ModalComponent,
  ModalFooterComponent,
  ModalHeaderComponent,
  ModalTitleDirective
} from "@coreui/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgForOf, NgIf} from "@angular/common";
import {Utilisateur} from "../../../Model/Utilisateur";
import {UserServService} from "../../../Service/user-serv.service";
import {Router} from "@angular/router";
import {AuthServiceService} from "../../../Service/auth-service-.service";
import {Role} from "../../../Model/Role";

@Component({
  selector: 'app-ajouter-user',
  standalone: true,
  imports: [
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    FormCheckComponent,
    ButtonCloseDirective,
    ButtonDirective,
    FormsModule,
    ModalBodyComponent,
    ModalComponent,
    ModalFooterComponent,
    ModalHeaderComponent,
    ModalTitleDirective,
    NgIf,
    ReactiveFormsModule,
    FormControlDirective,
    FormLabelDirective,
    FormDirective,
    NgForOf,
    FormSelectDirective
  ],
  templateUrl: './ajouter-user.component.html',
  styleUrl: './ajouter-user.component.scss'
})
export class AjouterUSERComponent {
  User:Utilisateur=new Utilisateur();
  roles = [
    { value: Role.USER, name: 'User' },
    { value: Role.ADMIN, name: 'Admin' },
    { value: Role.SUPER_ADMIN, name: 'Super Admin' }
  ];
  token: string = '';

  constructor(private userServ:UserServService,) {
  }
  ngOnInit() {
    this.token = localStorage.getItem('authToken') || '';
  }
  registerAdmin(): void {
    this.userServ.registerAdmin(this.User, this.token).subscribe({
      next: (response) => console.log('Admin enregistré avec succès : ', response),
      error: (err) => console.error('Erreur lors de l\'enregistrement de l\'admin : ', err)
    });
  }
}
