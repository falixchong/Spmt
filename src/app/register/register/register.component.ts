import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: [ './register.component.scss' ]
})
export class RegisterComponent implements OnInit {
	serviceErrors: any = {};
	registerForm: FormGroup;
	isRegistered: Boolean = false;

	constructor(private fb: FormBuilder, private http: HttpClient, private router: Router) {
		this.registerForm = this.fb.group({
			userName: [ null, [ Validators.required, Validators.maxLength(20) ] ],
			email: new FormControl(
				null,
				Validators.compose([
					Validators.required,
					Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
				])
			),
			password: [ null, [ Validators.required, Validators.maxLength(60) ] ]
		});
	}

	ngOnInit(): void {}

	register() {
		console.log(this.registerForm.value);
		this.http.post('/api/v1/register', this.registerForm.value).subscribe(
			(data: any) => {
				console.log(data);
				this.isRegistered = true;
				let path = 'login';
				this.router.navigate([ path ]);
			},
			(error) => {
				this.serviceErrors = error.error.error;
				this.isRegistered = false;
			}
		);
	}
}
