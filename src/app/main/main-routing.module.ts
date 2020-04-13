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
					{ path: 'join-sport', component: JoinSportComponent, data: { animation: 'JoinSport' } },
					{ path: 'sport-game', component: SportGameComponent, data: { animation: 'SportGame' } },
					{ path: 'sport-game/:id', component: SportGameComponent, data: { animation: 'SportGameID' } },
					{ path: 'host-sport', component: HostSportComponent, data: { animation: 'HostSport' } },
					{ path: 'your-sports', component: YourSportsComponent, data: { animation: 'YourSports' } },
					{ path: 'profile', component: ProfileComponent, data: { animation: 'Profile' } },
					{ path: '**', component: PageNotFoundComponent }
				]
			}
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class MainRoutingModule {}
