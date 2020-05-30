import { Injectable } from '@angular/core';
import {
	Router,
	NavigationExtras,
	CanActivate,
	CanActivateChild,
	CanDeactivate,
	CanLoad,
	Route,
	UrlSegment,
	ActivatedRouteSnapshot,
	RouterStateSnapshot,
	UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild, CanDeactivate<unknown>, CanLoad {
	constructor(private authService: AuthService, private router: Router) {}

	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		let url: string = state.url;
		return this.checkLogin(url);
	}

	canActivateChild(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.canActivate(route, state);
	}

	canDeactivate(
		component: unknown,
		currentRoute: ActivatedRouteSnapshot,
		currentState: RouterStateSnapshot,
		nextState?: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return true;
	}

	canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
		let url = `/${route.path}`;

		return this.checkLogin(url);
	}

	checkLogin(url: string): boolean {
		if (this.authService.isLoggedIn) {
			return true;
		}

		// Store the attempted URL for redirecting
		this.authService.redirectUrl = url;

		console.log('checkLogin called');
		console.log(this.authService.redirectUrl);

		// Set our navigation extras object
		// that contains our global query params and fragment
		let navigationExtras: NavigationExtras = {
			queryParamsHandling: 'preserve',
			preserveFragment: true
		};

		// Navigate to the login page with extras
		this.router.navigate([ '/login' ], navigationExtras);
		return false;
	}
}
