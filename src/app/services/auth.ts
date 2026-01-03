import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth-response';
import { AuthScreenService } from './auth-screen';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private readonly _httpClient: HttpClient,
    private readonly _authScreenService: AuthScreenService,
    private readonly _router: Router) { }

  public register(username: string, email: string, password: string): void {
    this._httpClient.post<AuthResponse>(`${environment.apiUrl}auth/register`, {
      username,
      email,
      password,
    }).subscribe({
      next: (response) => {
        this._authScreenService.goToLogin();
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

  public login(email: string, password: string): void {
    this._httpClient.post<AuthResponse>(`${environment.apiUrl}auth/login`, {
      email,
      password,
    }).subscribe({
      next: (response) => {
      },
      error: (error) => {
        console.error('Login failed', error);
      },
      complete: () => {
        console.log('Login request completed');
        this._router.navigateByUrl('/create-expense');
      }
    });
  }
}
