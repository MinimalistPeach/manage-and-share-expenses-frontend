import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class Form {

  private readonly _registerForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  private readonly _loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  public resetRegisterForm(): void {
    this._registerForm.reset();
  }

  public resetLoginForm(): void {
    this._loginForm.reset();
  }

  public get loginForm(): FormGroup {
    return this._loginForm;
  }

  public get registerForm(): FormGroup {
    return this._registerForm;
  }

}
