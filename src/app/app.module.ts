import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProjetsComponent } from './projet/projet.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AjouteProjetComponent } from './ajoute-projet/ajoute-projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { MembresComponent } from './membres/membres.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { BacklogComponent } from './backlog/backlog.component';

import { ListbacklogComponent } from './listbacklog/listbacklog.component';
import { SprintComponent } from './sprint/sprint.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProjetsComponent,
    AjouteProjetComponent,
    UpdateProjetComponent,
    DetailsProjetComponent,
    MembresComponent,
    UserstoryComponent,
    BacklogComponent,
    ListbacklogComponent,
    SprintComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
