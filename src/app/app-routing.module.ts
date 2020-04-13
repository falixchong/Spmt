import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';

const routes: Routes = [
	{ path: 'login', redirectTo: '/login', pathMatch: 'full', data: { animation: 'Login' } },
	{ path: 'register', redirectTo: '/register', pathMatch: 'full', data: { animation: 'Register' } },
	{ path: '', redirectTo: '/login', pathMatch: 'full' },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
	imports: [
		RouterModule.forRoot(
			routes
			// { enableTracing: true } // <-- debugging purposes only
		)
	],
	exports: [ RouterModule ]
})
export class AppRoutingModule {}
