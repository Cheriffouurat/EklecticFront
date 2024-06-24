import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoriebackComponent} from "../categorie/categorieback/categorieback.component";
import {CreateCategorieComponent} from "../categorie/create-categorie/create-categorie.component";
import {ServicebackComponent} from "./serviceback/serviceback.component";
import {CreateServiceComponent} from "./create-service/create-service.component";
import {ModifyserviceComponent} from "./modifyservice/modifyservice.component";
import {ImageServiceComponent} from "./image-service/image-service.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Service'
    },
    children: [

      {
        path: 'Service',
        component: ServicebackComponent,
        data: {
          title: 'Service'
        }
      },
      {
        path: 'ImageService/:id',
        component: ImageServiceComponent,
        data: {
          title: 'ImageService'
        }
      },
      {
        path: 'CreatService',
        component: CreateServiceComponent,
        data: {
          title: 'CreatService'
        }
      },
      {
        path: 'ModifyService/:id',
        component: ModifyserviceComponent,
        data: {
          title: 'ModifyService'
        }
      },

    ]
  }
];




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
