import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

import {HomeFrontComponent} from "./FrontOffice/home-front/home-front.component";
import {LoginsComponent} from "./FrontOffice/logins/logins.component";
import {BackuserComponent} from "./FrontOffice/backuser/backuser.component";
import {ModifyUserbackComponent} from "./FrontOffice/modify-userback/modify-userback.component";

import {NavigateBarComponent} from "./FrontOffice/navigate-bar/navigate-bar.component";
import {HomePageComponent} from "./FrontEnd/home-page/home-page.component";
import {CategoriesPageComponent} from "./FrontEnd/categories-page/categories-page.component";
import {ServicesPageComponent} from "./FrontEnd/services-page/services-page.component";
import {ServiceDetailComponent} from "./FrontEnd/service-detail/service-detail.component";

import {ConnexionComponent} from "./FrontEnd/connexion/connexion.component";
import {ResetpwdComponent} from "./FrontEnd/resetpwd/resetpwd.component";
import {InscriptionComponent} from "./FrontEnd/inscription/inscription.component";
import {NavigationBarComponent} from "./FrontEnd/navigation-bar/navigation-bar.component";
import {RpwdCodeComponent} from "./FrontEnd/rpwd-code/rpwd-code.component";
import {
  ServicePageParCategorieComponent
} from "./FrontEnd/service-page-par-categorie/service-page-par-categorie.component";
import {ServiceTypeService} from "./Service/service-type.service";
import {ServicetypeParServiceComponent} from "./FrontEnd/servicetype-par-service/servicetype-par-service.component";
import {ServiceTypeDeatilComponent} from "./FrontEnd/service-type-deatil/service-type-deatil.component";
import {SimPaymentComponent} from "./FrontEnd/sim-payment/sim-payment.component";
import {CallbackComponent} from "./FrontEnd/callback/callback.component";
import {AuthGuardService} from "./Service/auth-guard.service";
import {UnauthorizedComponent} from "./FrontEnd/unauthorized/unauthorized.component";
import {ProfileComponent} from "./FrontEnd/profile/profile.component";
import {AjouterUSERComponent} from "./BackEnd/user/ajouter-user/ajouter-user.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./views/dashboard/dashboard.module').then((m) => m.DashboardModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }
      },
      {
        path: 'categorie',
        loadChildren: () =>
          import('./BackEnd/categorie/categorie.module').then((m) => m.CategorieModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }

      },
      {
        path: 'service',
        loadChildren: () =>
          import('./BackEnd/service/service.module').then((m) => m.ServiceModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }

      },
      {
        path: 'TypeService',
        loadChildren: () =>
          import('./BackEnd/service-type/service-type.module').then((m) => m.ServiceTypeModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }

      },
      {
        path: 'Offres',
        loadChildren: () =>
          import('./BackEnd/offre/offre.module').then((m) => m.OffreModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }

      },
      {
        path: 'user',
        loadChildren: () =>
          import('./BackEnd/user/user.module').then((m) => m.UserModule), canActivate: [AuthGuardService],
        data: { expectedRole: 'ADMIN' }

      },

      {
        path: 'theme',
        loadChildren: () =>
          import('./views/theme/theme.module').then((m) => m.ThemeModule)
      },
      {
        path: 'base',
        loadChildren: () =>
          import('./views/base/base.module').then((m) => m.BaseModule)
      },
      {
        path: 'buttons',
        loadChildren: () =>
          import('./views/buttons/buttons.module').then((m) => m.ButtonsModule)
      },
      {
        path: 'forms',
        loadChildren: () =>
          import('./views/forms/forms.module').then((m) => m.CoreUIFormsModule)
      },
      {
        path: 'charts',
        loadChildren: () =>
          import('./views/charts/charts.module').then((m) => m.ChartsModule)
      },
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./views/notifications/notifications.module').then((m) => m.NotificationsModule)
      },


      {
        path: 'widgets',
        loadChildren: () =>
          import('./views/widgets/widgets.module').then((m) => m.WidgetsModule)
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  // {
  //   path: 'login',
  //   component: LoginComponent,
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },


  {
    path: 'HomeFront',
    component: HomeFrontComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'Auth',
    component: LoginsComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'backuser',
    component: BackuserComponent,
    data: {
      title: 'backuser Page'
    }
  },
  {
    path: 'modifyuser',
    component: ModifyUserbackComponent,
    data: {
      title: 'modifyuser Page'
    }
  },

  {
    path: 'NavigateBar',
    component: NavigateBarComponent,
    data: {
      title: 'NavigateBar Page'
    }
  },
  {
    path: 'HomePage',
    component: HomePageComponent,
    data: {
      title: 'Home Page'
    }
  },
  {
    path: 'ServicesPage',
    component: CategoriesPageComponent,
    data: {
      title: 'ServicesPage'
    }
  },
  {
    path: 'ServicesPageParCategorie/:id',
    component: ServicePageParCategorieComponent,
    data: {
      title: 'ServicesPageParCategorie'
    }
  },
  {
    path: 'ServicesTypePage',
    component: ServicesPageComponent,
    data: {
      title: 'ServicesT Page'
    }
  },
  {
    path: 'ServicetypeParService/:id',
    component: ServicetypeParServiceComponent,
    data: {
      title: 'ServicetypeParService Page'
    }
  },
  {
    path: 'ServicetypeDetail/:id',
    component: ServiceTypeDeatilComponent,
    data: {
      title: 'ServiceTypeDeatil Page'
    }
  },
  {
    path: 'service detail',
    component: ServiceDetailComponent,
    data: {
      title: 'detail Page'
    }
  },

  {
    path: 'connexion',
    component: ConnexionComponent,
    data: {
      title: 'connexion Page'
    }
  },
  {
    path: 'rpwd',
    component: ResetpwdComponent,
    data: {
      title: 'rpwd Page'
    }
  },
  {
    path: 'newpassword',
    component: RpwdCodeComponent,
    data: {
      title: ' RpwdCode Page'
    }
  },
  {
    path: 'inscripton',
    component: InscriptionComponent,
    data: {
      title: 'inscripton Page'
    }
  },
  {
    path: 'SimPayment',
    component: SimPaymentComponent,
    data: {
      title: 'SimPayment Page'
    }
  },
  {
    path: 'callback',
    component: CallbackComponent,
    data: {
      title: 'SimPayment Page'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'profile Page'
    }
  },
  {
    path: 'ajouter',
    component: AjouterUSERComponent,
    data: {
      title: 'ajouter user'
    }
  },
  {
    path: 'NavBar',
    component:NavigationBarComponent,
    data: {
      title: 'NavBar Page'
    }
  },
    { path: 'unauthorized', component: UnauthorizedComponent },
  { path: '**', redirectTo: 'HomePage' },
  { path: '', redirectTo: 'HomePage', pathMatch: 'full' },



];

@NgModule({
  imports: [
     RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
       anchorScrolling: 'enabled',
       initialNavigation: 'enabledBlocking',
        // relativeLinkResolution: 'legacy',
     })
   ],
   exports: [RouterModule]
})
export class AppRoutingModule {
}
