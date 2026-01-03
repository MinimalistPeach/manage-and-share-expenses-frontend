import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenCheckerService } from './services/token-checker.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private tokenChecker: TokenCheckerService) {}

  canActivate(): boolean {
    console.log(this.tokenChecker.isAuthenticated())
    return this.tokenChecker.isAuthenticated();
  }
}