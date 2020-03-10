import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material-module';
import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';


@NgModule({
  declarations: [SidenavComponent],
  imports: [
    CommonModule,
    AngularMaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
