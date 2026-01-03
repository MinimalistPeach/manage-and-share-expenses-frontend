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

  public resetRegisterForm(): void {
    this._registerForm.reset();
  }

  public get registerForm(): FormGroup {
    return this._registerForm;
  }

}
