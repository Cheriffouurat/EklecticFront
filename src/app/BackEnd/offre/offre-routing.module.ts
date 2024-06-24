import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {OffreComponent} from "./offre/offre.component";
import {ServiceTypeAvecOffreComponent} from "./service-type-avec-offre/service-type-avec-offre.component";
import {AjouterOffreComponent} from "./ajouter-offre/ajouter-offre.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Offre'
    },
    children: [

      {
        path: 'AjouterOffre/:id',
        component: AjouterOffreComponent,
        data: {
          title: 'ActiverOffre'
        }
      },
      {
        path: 'ActiverOffre',
        component: OffreComponent,
        data: {
          title: 'Offre'
        }
      },
      {
        path: 'ServiceTypeToOffre',
        component: ServiceTypeAvecOffreComponent,
        data: {
          title: 'ServiceTypeToOffre'
        }
      },


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OffreRoutingModule {

}
