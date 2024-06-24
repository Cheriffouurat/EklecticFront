import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicebackComponent} from "../service/serviceback/serviceback.component";
import {CreateServiceComponent} from "../service/create-service/create-service.component";
import {UserbackComponent} from "./userback/userback.component";
import {ModifyUserbackComponent} from "../../FrontOffice/modify-userback/modify-userback.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Utilisateur'
    },
    children: [

      {
        path: 'Utilisateur',
        component: UserbackComponent,
        data: {
          title: 'Utilisateur'
        }
      },
      {
        path: 'ModifyUser/:id',
        component: ModifyUserbackComponent,
        data: {
          title: 'ModifyUser'
        }
      }
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
