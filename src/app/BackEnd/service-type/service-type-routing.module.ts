import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ServicebackComponent} from "../service/serviceback/serviceback.component";
import {CreateServiceComponent} from "../service/create-service/create-service.component";
import {ModifyserviceComponent} from "../service/modifyservice/modifyservice.component";
import {ServiceTypeBackComponent} from "./service-type-back/service-type-back.component";
import {CreateServiceTypeComponent} from "./create-service-type/create-service-type.component";
import {ModifyServiceTypeComponent} from "./modify-service-type/modify-service-type.component";
import {ImageServiceComponent} from "../service/image-service/image-service.component";
import {ServiceTypeImageComponent} from "./service-type-image/service-type-image.component";

const routes: Routes = [
  {
    path: '',
    data: {
      title: ''
    },
    children: [

      {
        path: 'ServicetypeBack',
        component: ServiceTypeBackComponent,
        data: {
          title: 'ServiceType'
        }
      },
      {
        path: 'CreerServiceType',
        component: CreateServiceTypeComponent,
        data: {
          title: 'CreerServiceType'
        }
      },
      {
        path: 'ModifyServiceType/:id',
        component: ModifyServiceTypeComponent,
        data: {
          title: 'ModifyServiceType'
        }
      },
      {
        path: 'ServiceTypeImage/:id',
        component: ServiceTypeImageComponent,
        data: {
          title: 'ServiceTypeImage'
        }
      },

    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceTypeRoutingModule { }
