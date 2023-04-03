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
import { CardsComponent } from './components/cards/cards.component';
import { RegisterCollectionComponent } from './pages/collections/register-collection/register-collection.component';
import { EditCollectionComponent } from './pages/collections/edit-collection/edit-collection.component';
import { EditModelComponent } from './pages/models/edit-model/edit-model.component';
import { RegisterModelComponent } from './pages/models/register-model/register-model.component';
import { LoginGuard } from './guards/login/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'cards',
    component: CardsComponent
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
    canActivate: [LoginGuard],
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
      },
      {
        path: 'register-collection',
        component: RegisterCollectionComponent,
      },
      {
        path: 'edit-collection/:id',
        component: EditCollectionComponent
      },
      {
        path: 'edit-model/:id',
        component: EditModelComponent
      },
      {
        path: 'register-model',
        component: RegisterModelComponent
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
