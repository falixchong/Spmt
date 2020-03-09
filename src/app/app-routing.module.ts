import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { JoinGameComponent } from './components/join-game/join-game.component';
import { HostGameComponent } from './components/host-game/host-game.component';
import { PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: 'register', component: RegisterUserComponent},
  { path: 'sidenav', component: SidenavComponent},
  { path: 'join-game', component: JoinGameComponent},
  { path: 'host-game', component: HostGameComponent},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { enableTracing: true } // <-- debugging purposes only
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
