import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
	declarations: [ LoginComponent ],
	imports: [ CommonModule, LoginRoutingModule, AngularMaterialModule, FormsModule, ReactiveFormsModule ]
})
export class LoginModule {}
