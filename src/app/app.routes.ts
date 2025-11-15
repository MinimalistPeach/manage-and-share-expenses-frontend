import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'auth', loadComponent: () => import('./screens/auth-screen/auth-screen').then(m => m.AuthScreen) },

    { path: '', redirectTo: 'auth', pathMatch: 'full' },
];
