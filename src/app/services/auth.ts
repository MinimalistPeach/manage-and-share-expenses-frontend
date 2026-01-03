import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { AuthResponse } from '../models/auth-response';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  constructor(private readonly _httpClient: HttpClient) { }

  public register(username: string, email: string, password: string): void {
    this._httpClient.post<AuthResponse>(`${environment.apiUrl}auth/register`, {
      username,
      email,
      password,
    }).subscribe({
      next: (response) => {
        console.log('Registration successful', response);
      },
      error: (error) => {
        console.error('Registration failed', error);
      }
    });
  }

}
