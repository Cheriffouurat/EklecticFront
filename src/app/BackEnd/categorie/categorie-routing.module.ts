import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {CategoriebackComponent} from "./categorieback/categorieback.component";
import {CreateCategorieComponent} from "./create-categorie/create-categorie.component";
import {ModifycategorieComponent} from "./modifycategorie/modifycategorie.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Categorie'
    },
    children: [

      {
        path: 'categorie',
        component: CategoriebackComponent,
        data: {
          title: 'Categorie'
        }
      },
      {
        path: 'CreatCategorie',
        component: CreateCategorieComponent,
        data: {
          title: 'CreateCategorie'
        }
      } ,  {
        path: 'ModifyCategorie/:id',
        component: ModifycategorieComponent,
        data: {
          title: 'ModifierCategorie'
        }
      },

    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorieRoutingModule { }
