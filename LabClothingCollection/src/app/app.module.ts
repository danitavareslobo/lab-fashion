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
import { RegisterCollectionComponent } from './pages/register-collection/register-collection.component';
import { EditCollectionComponent } from './pages/edit-collection/edit-collection.component';
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
    RegisterCollectionComponent,
    EditCollectionComponent,
    FullComponent,
    ContentComponent,
    MenuComponent,
    HeaderComponent,
    CardsComponent,
    ModelsComponent,
    HelpComponent,
    ComentsComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
