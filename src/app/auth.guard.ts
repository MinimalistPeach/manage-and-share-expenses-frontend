import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenCheckerService } from './services/token-checker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenChecker: TokenCheckerService, private _router: Router) {}

  canActivate(): boolean {
    if (!this.tokenChecker.isAuthenticated()) {
      this._router.navigate(['/auth']);
      return false;
    }
    return this.tokenChecker.isAuthenticated();
  }
}