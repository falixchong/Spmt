import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationExtras } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthGuard } from '../auth/auth.guard';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
