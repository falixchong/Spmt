import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register/register.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
	{ path: 'login', component: LoginComponent, data: { animationParent: 'Login' } },
	{ path: 'register', component: RegisterComponent, data: { animationParent: 'Register' } },
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
