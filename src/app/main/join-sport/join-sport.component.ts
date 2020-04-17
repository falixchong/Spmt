import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-join-sport',
	templateUrl: './join-sport.component.html',
	styleUrls: [ './join-sport.component.scss' ]
})
export class JoinSportComponent {
	/** Based on the screen size, switch from standard to one column per row */
	cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
		map(({ matches }) => {
			if (matches) {
				return [
					{ title: 'Sport 1', cols: 2, rows: 1 },
					{ title: 'Sport 2', cols: 2, rows: 1 },
					{ title: 'Sport 3', cols: 2, rows: 1 },
					{ title: 'Sport 4', cols: 2, rows: 1 },
					{ title: 'Sport 1', cols: 2, rows: 1 },
					{ title: 'Sport 2', cols: 2, rows: 1 },
					{ title: 'Sport 3', cols: 2, rows: 1 },
					{ title: 'Sport 4', cols: 2, rows: 1 }
				];
			}

			return [
				{ title: 'Sport 1', cols: 1, rows: 1 },
				{ title: 'Sport 2', cols: 1, rows: 1 },
				{ title: 'Sport 3', cols: 1, rows: 1 },
				{ title: 'Sport 4', cols: 1, rows: 1 },
				{ title: 'Sport 1', cols: 1, rows: 1 },
				{ title: 'Sport 2', cols: 1, rows: 1 },
				{ title: 'Sport 3', cols: 1, rows: 1 },
				{ title: 'Sport 4', cols: 1, rows: 1 }
			];
		})
	);

	constructor(
		private breakpointObserver: BreakpointObserver,
		private route: ActivatedRoute,
		private router: Router,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer
	) {
		this.matIconRegistry.addSvgIcon(
			'badminton',
			this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/badminton.svg')
		);
	}
}
