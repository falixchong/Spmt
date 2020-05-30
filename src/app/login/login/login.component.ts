import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: [ './login.component.scss' ],
	animations: []
})
export class LoginComponent implements OnInit {
	message: string;
	errorMessage: string;
	loginForm: FormGroup;

	constructor(private fb: FormBuilder, public authService: AuthService, public router: Router) {
		this.loginForm = this.fb.group({
			userName: [ null, [ Validators.required, Validators.maxLength(20) ] ],
			password: [ null, [ Validators.required, Validators.maxLength(60) ] ]
		});
	}

	ngOnInit(): void {}

	login() {
		this.message = 'Trying to log in ...';

		this.authService.login(this.loginForm.value.userName, this.loginForm.value.password).subscribe(() => {
			if (this.authService.isLoggedIn) {
				// Usually you would use the redirect URL from the auth service.
				// However to keep the example simple, we will always redirect to `/admin`.
				const redirectUrl = 'main';

				// Create a dummy session id
				// Need to study how to implement session
				let sessionId = 123456789;

				// Set our navigation extras object
				// that contains our global query params and fragment
				let navigationExtras: NavigationExtras = {
					queryParams: { session_id: sessionId },
					fragment: 'anchor'
				};

				// Redirect the user
				this.router.navigate([ redirectUrl ], navigationExtras);
			} else {
				this.errorMessage = 'Invalid login. Try again';
				this.loginForm.controls['password'].reset();
			}
		});
	}

	logout() {
		this.authService.logout();
	}

	onSubmit() {}
}
