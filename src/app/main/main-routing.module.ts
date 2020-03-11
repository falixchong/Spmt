import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationExtras } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthGuard } from '../auth/auth.guard';
import { JoinGameComponent } from './join-game/join-game.component';
import { HostGameComponent } from './host-game/host-game.component';

let navigationExtras: NavigationExtras = {
  queryParamsHandling: 'preserve',
  preserveFragment: true
};

const routes: Routes = [
  // {
  //   path: 'main', 
  //   redirectTo: '/spoint',
  //   pathMatch: 'full'
  // },
  {
    path: 'main', 
    component: SidenavComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: '', component: JoinGameComponent },
          { path: 'join-game', component: JoinGameComponent },
          { path: 'host-game', component: HostGameComponent },
        ]
      }
    ]
  },
  // {
  //   path: 'join-game', 
  //   component: SidenavComponent,
  //   canActivate: [AuthGuard],
  // },
  // {
  //   path: 'host-game', 
  //   component: SidenavComponent,
  //   canActivate: [AuthGuard],
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
