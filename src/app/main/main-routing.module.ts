import { NgModule } from '@angular/core';
import { Routes, RouterModule, NavigationExtras } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { AuthGuard } from '../auth/auth.guard';
import { JoinSportComponent } from './join-sport/join-sport.component';
import { HostSportComponent } from './host-sport/host-sport.component';
import { SportGameComponent } from './sport-game/sport-game.component';
import { YourSportsComponent } from './your-sports/your-sports.component';
import { ProfileComponent } from './profile/profile.component';
import { PageNotFoundComponent } from '../common/page-not-found/page-not-found.component';

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
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
	{
		path: 'main',
		component: SidenavComponent,
		canActivate: [ AuthGuard ],
		children: [
			{
				path: '',
				canActivateChild: [ AuthGuard ],
				children: [
					{ path: '', redirectTo: 'join-sport', pathMatch: 'full' },
					{ path: 'join-sport', component: JoinSportComponent },
					{ path: 'sport-game', component: SportGameComponent },
					{ path: 'sport-game/:id', component: SportGameComponent },
					{ path: 'host-sport', component: HostSportComponent },
					{ path: 'your-sports', component: YourSportsComponent },
					{ path: 'profile', component: ProfileComponent },
					{ path: '**', component: PageNotFoundComponent }
				]
			}
		]
	}
	// {
	//   path: 'join-sport',
	//   component: SidenavComponent,
	//   canActivate: [AuthGuard],
	// },
	// {
	//   path: 'host-sport',
	//   component: SidenavComponent,
	//   canActivate: [AuthGuard],
	// }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MainRoutingModule {}
