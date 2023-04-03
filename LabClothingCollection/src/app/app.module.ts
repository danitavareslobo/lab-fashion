import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignupComponent } from './pages/signup/signup.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { ModelsComponent } from './pages/models/models.component';
import { HelpComponent } from './pages/help/help.component';
import { ComentsComponent } from './pages/coments/coments.component';
import { RegisterCollectionComponent } from './pages/collections/register-collection/register-collection.component';
import { EditCollectionComponent } from './pages/collections/edit-collection/edit-collection.component';
import { EditModelComponent } from './pages/models/edit-model/edit-model.component';
import { RegisterModelComponent } from './pages/models/register-model/register-model.component';
import { LoginGuard } from './guards/login/login.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    CollectionsComponent,
    ResetPasswordComponent,
    SignupComponent,
    FullComponent,
    ContentComponent,
    MenuComponent,
    HeaderComponent,
    CardsComponent,
    ModelsComponent,
    HelpComponent,
    ComentsComponent,
    RegisterCollectionComponent,
    EditCollectionComponent,
    EditModelComponent,
    RegisterModelComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
