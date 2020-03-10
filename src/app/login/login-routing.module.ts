import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SidenavComponent } from '../main/sidenav/sidenav.component';


const routes: Routes = [
  { 
    path: 'login', 
    component: LoginComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'main', component: SidenavComponent},
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
