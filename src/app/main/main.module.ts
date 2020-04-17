import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../material-module';
import { MainRoutingModule } from './main-routing.module';
import { SidenavComponent } from './sidenav/sidenav.component';
import { JoinSportComponent } from './join-sport/join-sport.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HostSportComponent } from './host-sport/host-sport.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SportGameComponent } from './sport-game/sport-game.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { YourSportsComponent } from './your-sports/your-sports.component';
import { ProfileComponent } from './profile/profile.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';

@NgModule({
	declarations: [
		SidenavComponent,
		JoinSportComponent,
		HostSportComponent,
		SportGameComponent,
		YourSportsComponent,
		ProfileComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CommonModule,
		AngularMaterialModule,
		MainRoutingModule,
		LayoutModule,
		ReactiveFormsModule,
		FlexLayoutModule,
		HttpClientModule,
		NgxMaterialTimepickerModule
	]
})
export class MainModule {}
