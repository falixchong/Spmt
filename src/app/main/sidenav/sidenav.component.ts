import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, HostListener, ViewChild, Component, OnDestroy, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Router, NavigationExtras } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { trigger, state, style, animate, transition, query, animateChild, group } from '@angular/animations';

@Component({
	selector: 'app-sidenav',
	templateUrl: './sidenav.component.html',
	styleUrls: [ './sidenav.component.scss' ],
	animations: [
		trigger('fadeFlyInOut', [
			state('in', style({ transform: 'translateX(0)' })),
			transition(':enter', [
				style({ transform: 'translateX(-100%)', opacity: 0 }),
				animate('600ms 100ms ease-in-out')
			]),
			transition(':leave', [ animate('600ms 100ms ease-in-out', style({ transform: 'translateX(100%)' })) ])
		]),
		trigger('routeAnimations', [
			// More improvement can be done here fully understanding query/group
			transition('* => *', [
				style({ position: 'relative' }),
				query(
					':enter, :leave',
					[
						style({
							position: 'absolute',
							top: 0,
							left: 0,
							width: '100%'
						})
					],
					{ optional: true }
				),
				query(':enter', [ style({ left: '-100%' }) ], { optional: true }),
				// query(':leave', animateChild(), { optional: true }),
				group([
					query(':leave', [ animate('200ms 100ms ease-in-out', style({ left: '100%' })) ], {
						optional: true
					}),
					query(':enter', [ animate('200ms 100ms ease-in-out', style({ left: '0%' })) ], { optional: true })
				]),
				query(':enter', animateChild(), { optional: true })
			])
		])
	]
})
export class SidenavComponent implements OnDestroy, OnInit {
	@ViewChild('snav') sidenav: any;

	@HostBinding('@.disabled') public animationsDisabled = false;

	@HostListener('document:keydown', [ '$event' ])
	handleKeyboardEvent(event: KeyboardEvent) {
		//console.log(event.key);
		if (event.key == 'Escape') this.sidenav.toggle();
	}

	sessionId: Observable<string>;
	token: Observable<string>;
	mobileQuery: MediaQueryList;

	private _mobileQueryListener: () => void;

	constructor(
		changeDetectorRef: ChangeDetectorRef,
		media: MediaMatcher,
		public authService: AuthService,
		public router: Router,
		private route: ActivatedRoute
	) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this._mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addListener(this._mobileQueryListener);
	}

	ngOnInit(): void {
		// Capture the session ID if available
		this.sessionId = this.route.queryParamMap.pipe(map((params) => params.get('session_id') || 'None'));

		//console.log('SessionId');
		//console.log(this.sessionId);

		// Capture the fragment if available
		this.token = this.route.fragment.pipe(map((fragment) => fragment || 'None'));

		//console.log('Token');
		//console.log(this.token);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeListener(this._mobileQueryListener);
	}

	logout() {
		let navigationExtras: NavigationExtras = {
			queryParamsHandling: 'preserve',
			preserveFragment: true
		};
		this.animationsDisabled = !this.animationsDisabled;
		this.authService.logout();
		setTimeout(() => this.router.navigate([ '/login' ], navigationExtras), 500);
	}

	closeSideNav() {
		if (this.sidenav._mode == 'over') {
			this.sidenav.close();
		}
	}

	prepareRoute(outlet: RouterOutlet) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
