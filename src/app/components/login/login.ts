import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthScreenService } from '../../services/auth-screen';

@Component({
  selector: 'login',
  imports: [
    MatInput,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatLabel
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  constructor(private readonly _authScreenService: AuthScreenService) { }

  public goToRegister(): void {
    this._authScreenService.goToRegister();
  }

}
