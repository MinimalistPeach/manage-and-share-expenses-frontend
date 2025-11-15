import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInput, MatLabel } from '@angular/material/input';
import { AuthScreenService } from '../../services/auth-screen';

@Component({
  selector: 'register',
  imports: [
    MatInput,
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatLabel
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

  constructor(private readonly _authScreenService: AuthScreenService) {}

    public goToLogin(): void {
    this._authScreenService.goToLogin();
  }

}
