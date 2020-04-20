import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-join-sport',
	templateUrl: './join-sport.component.html',
	styleUrls: [ './join-sport.component.scss' ]
})
export class JoinSportComponent implements OnInit {
	constructor(
		private breakpointObserver: BreakpointObserver,
		private route: ActivatedRoute,
		private router: Router,
		private matIconRegistry: MatIconRegistry,
		private domSanitizer: DomSanitizer,
		private http: HttpClient
	) {
		this.matIconRegistry.addSvgIcon(
			'badminton',
			this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/svg/badminton.svg')
		);
	}

	sportGames: any;
	cards: any;

	ngOnInit(): void {
		this.sportGames = this.route.params.subscribe(() => {
			this.http.get('/api/v1/sport_game/').subscribe((data: object[]) => {
				console.log('Debug1');
				console.log(data);

				this.cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
					map(({ matches }) => {
						data.forEach((val: any) => {
							val.cols = 2;
							val.rows = 1;
						});
						if (matches) {
							console.log('Debug2');
							console.log(this.sportGames);
							return data;
						}
						console.log('Debug3');
						console.log(this.sportGames);
						data.forEach((val: any) => {
							val.cols = 1;
							val.rows = 1;
						});

						return data;
					})
				);
				console.log('Debug4');
			});
		});
	}
}
