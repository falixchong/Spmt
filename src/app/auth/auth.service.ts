import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	loginResponse = false;
	isLoggedIn = false;
	serviceErrors: any = {};

	constructor(private http: HttpClient, private router: Router) {}

	// store the URL so we can redirect after logging in
	redirectUrl: string;

	// Call login service
	login(username: string, password: string): Observable<boolean> {
		let data: any = { userName: username, password: password };

		return this.http.post<boolean>('/api/v1/auth', data).pipe(tap((val) => (this.isLoggedIn = val)));
	}

	logout(): void {
		this.isLoggedIn = false;
	}
}
