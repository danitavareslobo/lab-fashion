import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { HelpComponent } from './pages/help/help.component';
import { ComentsComponent } from './pages/coments/coments.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ModelsComponent } from './pages/models/models.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },  
  {
    path: 'reset',
    component: ResetPasswordComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'private',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'collections',
        component: CollectionsComponent,
      },
      {
        path: 'models',
        component: ModelsComponent,
      },
      {
        path: 'help',
        component: HelpComponent,
      },
      {
        path: 'coments',
        component: ComentsComponent,
      }
    ]
  },
  {
    path: '',
    component: ContentComponent,    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
