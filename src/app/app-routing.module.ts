import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ProjetsComponent} from './projet/projet.component';
import { UpdateProjetComponent } from './update-projet/update-projet.component';
import { DetailsProjetComponent } from './details-projet/details-projet.component';
import { AjouteProjetComponent } from './ajoute-projet/ajoute-projet.component';
import { MembresComponent } from './membres/membres.component';
import { UserstoryComponent } from './userstory/userstory.component';
import { BacklogComponent } from './backlog/backlog.component';
import { ListbacklogComponent } from './listbacklog/listbacklog.component';
import { SprintComponent } from './sprint/sprint.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'projet', component: ProjetsComponent },
  { path: 'update/:id', component: UpdateProjetComponent },
  { path: 'details/:id', component: DetailsProjetComponent },
  { path: 'ajouteprojet', component: AjouteProjetComponent},
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'userstory', component: UserstoryComponent },
  { path: 'membres', component: MembresComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: 'backlog', component: BacklogComponent },
  { path: 'listbacklog', component: ListbacklogComponent },
  { path: 'backlog/sprint', component: SprintComponent },

  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
