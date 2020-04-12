import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from '../main/sidenav/sidenav.component';
import { AuthGuard } from '../auth/auth.guard';
import { LoginModule } from './login.module';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
    // children: [
    //   {
    //     path: '',
    //     canActivateChild: [AuthGuard],
    //     children: [
    //       { path: 'main', redirectTo: '/spoint' },
    //       { path: 'spoint', component: SidenavComponent }
    //     ]
    //   }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
