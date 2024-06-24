import {Component, OnInit} from '@angular/core';
import {Utilisateur} from "../../../Model/Utilisateur";
import {UserServService} from "../../../Service/user-serv.service";
import {
  ButtonDirective,
  ButtonGroupComponent,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective, TableColorDirective, TableDirective
} from "@coreui/angular";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

@Component({
  selector: 'app-userback',
  standalone: true,
  imports: [
    ButtonDirective,
    ButtonGroupComponent,
    CardBodyComponent,
    CardComponent,
    CardHeaderComponent,
    DropdownComponent,
    DropdownDividerDirective,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    NgForOf,
    NgIf,
    RouterLink,
    TableColorDirective,
    TableDirective
  ],
  templateUrl: './userback.component.html',
  styleUrl: './userback.component.scss'
})
export class UserbackComponent implements OnInit {
  listUsers! : Utilisateur[];

  constructor(private _service:UserServService) { }

  ngOnInit() {
    this._service.getAllUsers().subscribe({
      next: (data) => {
        this.listUsers = data;
        console.log(this.listUsers);
      },
      error: (error) => {
        // Gérer les erreurs ici si nécessaire
        console.error('Une erreur s\'est produite : ', error);
      }
    });
  }
  DeleteUser(id:number){
    this._service.deleteUser(id).subscribe({next:()=>this.ngOnInit()});
  }


}
