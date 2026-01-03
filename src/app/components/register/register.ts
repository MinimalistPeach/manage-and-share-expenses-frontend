import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { AuthScreenService } from '../../services/auth-screen';
import { Form } from '../../services/form';
import { Auth } from '../../services/auth';
import { ToastService } from '../../services/toasts.service';

@Component({
  selector: 'register',
  imports: [
    MatInput,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatLabel,
    ReactiveFormsModule
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  constructor(private readonly _authScreenService: AuthScreenService,
    private readonly _authService: Auth,
    private readonly _formService: Form,
    private readonly _toastService: ToastService
  ) { }

  public goToLogin(): void {
    this._authScreenService.goToLogin();
  }

  public register() {
    const { username, email, password } = this._formService.registerForm.value;
    console.log(username, email, password)
    this._authService.register(username ?? '', email ?? '', password ?? '');
  }

  public get formService(): Form {
    return this._formService;
  }

}
