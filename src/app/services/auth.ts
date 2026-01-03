import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth-response';
import { AuthScreenService } from './auth-screen';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private readonly _httpClient: HttpClient, private readonly _authScreenService: AuthScreenService) { }

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
        // TODO: MAIN PAGE
      },
      error: (error) => {
        console.error('Login failed', error);
      }
    });
  }
}
