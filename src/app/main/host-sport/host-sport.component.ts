import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
	selector: 'app-host-sport',
	templateUrl: './host-sport.component.html',
	styleUrls: [ './host-sport.component.scss' ]
})
export class HostSportComponent {
	guid: string;
	submit = false;
	submitted = false;
	serviceErrors: any = {};

	hostSportForm = this.fb.group({
		groupName: [ null, Validators.required ],
		groupDesc: [ null, Validators.required ],
		location: [ null, Validators.required ],
		groupType: [ 'public', Validators.required ],
		groupJoinType: [ 'anyone', Validators.required ],
		sportType: [ null, Validators.required ]
	});

	hasUnitNumber = false;

	sportTypes = [
		{ name: 'Badminton', value: 'badminton' },
		{ name: 'Basketball', value: 'basketball' },
		{ name: 'Table Tennis', value: 'table_tennis' }
	];

	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
		this.http.get('/api/v1/generate_uid').subscribe(
			(data: any) => {
				this.guid = data.guid;
				//console.log(this.guid);
			},
			(error) => {
				console.log('There was an error generating the proper GUID on the server', error);
			}
		);
	}

	onSubmit() {
		this.submit = true;
		//console.log('SUBMIT: ' + this.submit);
		//console.log('POST DATA');
		//console.log(this.hostSportForm);

		if (this.hostSportForm.invalid) {
			//console.log('form validation failed');
			return;
		} else {
			let data: any = Object.assign({ guid: this.guid }, this.hostSportForm.value);
			//console.log('submitted GUID:' + data.guid);

			this.http.post('/api/v1/sport_game', data).subscribe(
				(data: any) => {
					// let path = 'main/sport-game/' + data.sportGame.gid;

					//console.log('SERVER POST RESPONSE');
					//console.log(data);

					let path = 'main/sport-game/' + data.gid;
					//console.log('ROUTE TO SPORT GAME');
					//console.log(path);
					this.router.navigate([ path ]);
				},
				(error) => {
					this.serviceErrors = error.error.error;
					//console.log('SERVER POST ERROR RESPONSE' + this.serviceErrors);
				}
			);

			// this.postToDB(data);

			this.submitted = true;
		}
	}
}
