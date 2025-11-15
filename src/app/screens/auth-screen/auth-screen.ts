import { Component } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { Login } from '../../components/login/login';
import { Register } from '../../components/register/register';
import { AuthScreenService } from '../../services/auth-screen';

@Component({
  selector: 'app-auth-screen',
  imports: [
    Login,
    Register
  ],
  templateUrl: './auth-screen.html',
  styleUrl: './auth-screen.scss',
})
export class AuthScreen {

  constructor(
    private readonly _authScreenService: AuthScreenService
  ) { }

  public getAuthMode(): 'register' | 'login' {
    return this._authScreenService.authScreenMode;
  }

}
