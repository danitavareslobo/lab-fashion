import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: FullComponent,
  //   children: [

  //   ]
  // },
  {
    path: '',
    component: ContentComponent,
    children: [
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
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'signup',
        component: SignupComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
