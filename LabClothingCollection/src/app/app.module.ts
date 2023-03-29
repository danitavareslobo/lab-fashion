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
import { ModellsComponent } from './pages/modells/modells.component';
import { RegisterCollectionComponent } from './pages/register-collection/register-collection.component';
import { EditCollectionComponent } from './pages/edit-collection/edit-collection.component';
import { RegisterModellsComponent } from './pages/register-modells/register-modells.component';
import { EditModellsComponent } from './pages/edit-modells/edit-modells.component';
import { FullComponent } from './layouts/full/full.component';
import { ContentComponent } from './layouts/content/content.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    NotFoundComponent,
    HomeComponent,
    CollectionsComponent,
    ResetPasswordComponent,
    ModellsComponent,
    RegisterCollectionComponent,
    EditCollectionComponent,
    RegisterModellsComponent,
    EditModellsComponent,
    FullComponent,
    ContentComponent,   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
