import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthScreenService {

  private _authScreenMode: 'login' | 'register' = 'login';

  public get authScreenMode(): 'login' | 'register' {
    return this._authScreenMode;
  }
  public set authScreenMode(value: 'login' | 'register') {
    this._authScreenMode = value;
  }

  public goToRegister() {
    this.authScreenMode = 'register';
  }

  public goToLogin() {
    this.authScreenMode = 'login';
  }

}
