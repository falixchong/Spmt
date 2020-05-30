import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	serviceErrors: any = {};
	registerForm: FormGroup;

	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
		this.registerForm = this.fb.group({
			userName: [ null, [ Validators.required, Validators.maxLength(20) ] ],
			email: [ null, [ Validators.required, Validators.maxLength(60) ] ],
			password: [ null, [ Validators.required, Validators.maxLength(60) ] ]
		});
	}

	ngOnInit(): void {}

	register() {
		console.log(this.registerForm.value);
		this.http.post('/api/v1/register', this.registerForm.value).subscribe(
			(data: any) => {
				let path = 'main/sport-game/' + data.gid;
				this.router.navigate([ path ]);
			},
			(error) => {
				this.serviceErrors = error.error.error;
			}
		);
	}
}
