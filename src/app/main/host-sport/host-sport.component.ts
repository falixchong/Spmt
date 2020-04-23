import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
	selector: 'app-host-sport',
	templateUrl: './host-sport.component.html',
	styleUrls: [ './host-sport.component.scss' ]
})
export class HostSportComponent {
	@ViewChild('fileUpload', { static: false })
	fileUpload: ElementRef;

	guid: string;
	submit = false;
	submitted = false;
	serviceErrors: any = {};
	message: any;

	hostSportForm = this.fb.group({
		groupName: [ null, Validators.required ],
		groupDesc: [ null, Validators.required ],
		location: [ null, Validators.required ],
		startDateTime: [ null, Validators.required ],
		startTime: [ null, Validators.required ],
		endDateTime: [ null ],
		endTime: [ null ],
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
		console.log(this.hostSportForm);

		this.hostSportForm.value.startDateTime = this.populateTime(
			this.hostSportForm.value.startDateTime,
			this.hostSportForm.value.startTime
		);

		if (this.hostSportForm.value.endDateTime != null && this.hostSportForm.value.endTime != null) {
			this.hostSportForm.value.endDateTime = this.populateTime(
				this.hostSportForm.value.endDateTime,
				this.hostSportForm.value.endTime
			);
		}

		if (this.hostSportForm.invalid) {
			return;
		} else {
			let data: any = Object.assign({ guid: this.guid }, this.hostSportForm.value);

			this.http.post('/api/v1/sport_game', data).subscribe(
				(data: any) => {
					let path = 'main/sport-game/' + data.gid;
					this.router.navigate([ path ]);
				},
				(error) => {
					this.serviceErrors = error.error.error;
				}
			);
			this.submitted = true;
		}
	}

	hostSportTime: NgxMaterialTimepickerTheme = {
		// container: {
		// 	bodyBackgroundColor: '#424242',
		// 	buttonColor: '#fff'
		// },
		dial: {
			dialBackgroundColor: '#1976d2'
		},
		clockFace: {
			// clockFaceBackgroundColor: '#555',
			clockHandColor: '#63a4ff'
			// clockFaceTimeInactiveColor: '#fff'
		}
	};

	files = [];
	onClickUpload() {
		const fileUpload = this.fileUpload.nativeElement;
		fileUpload.onchange = () => {
			//Modify below code to only allow single image upload
			// 		for (let index = 0; index < fileUpload.files.length; index++) {
			// 			const file = fileUpload.files[index];
			// 			this.files.push({ data: file, inProgress: false, progress: 0 });
			// 		}
			var file = fileUpload.files[0];
			this.files[0] = { data: file, inProgress: false, progress: 0 };
			this.uploadFiles();
		};
		fileUpload.click();
	}

	private uploadFiles() {
		this.fileUpload.nativeElement.value = '';
		this.files.forEach((file) => {
			this.uploadFile(file);
		});
	}

	uploadFile(file: any) {
		const formData = new FormData();
		formData.append('sportGameImage', file.data);
		file.inProgress = true;
		let upload = this.http.post<any>('/api/v1/sport_game/image', formData, {
			reportProgress: true,
			observe: 'events'
		});

		upload
			.pipe(
				map((event) => {
					switch (event.type) {
						case HttpEventType.UploadProgress:
							file.progress = Math.round(event.loaded * 100 / event.total);
							break;
						case HttpEventType.Response:
							return event;
					}
				}),
				catchError((error: HttpErrorResponse) => {
					file.inProgress = false;
					return of(`${file.data.name} upload failed.`);
				})
			)
			.subscribe((event: any) => {
				if (typeof event === 'object') {
					console.log(event.body);
					this.message = event.body.message;
				}
			});
	}

	clearStartDate() {
		this.hostSportForm.get('startDateTime').setValue('');
	}
	clearEndDate() {
		this.hostSportForm.get('endDateTime').setValue('');
	}
	clearStartTime() {
		this.hostSportForm.get('startTime').setValue('');
	}
	clearEndTime() {
		this.hostSportForm.get('endTime').setValue('');
	}

	private populateTime(date: Date, time: String) {
		let startSplittedHour = time.split(':', 2);
		let startSplittedMinAmPm = startSplittedHour[1].split(' ', 2);
		let startHour =
			startSplittedMinAmPm[1] == 'PM' && startSplittedHour[0] != '12'
				? +startSplittedHour[0] + 12
				: +startSplittedHour[0];
		startHour = startSplittedMinAmPm[1] == 'AM' && startSplittedHour[0] == '12' ? 0 : startHour;
		let startMin = +startSplittedMinAmPm[0];

		date.setHours(startHour);
		date.setMinutes(startMin);
		date.setSeconds(0);
		date.setMilliseconds(0);

		return date;
	}
}
