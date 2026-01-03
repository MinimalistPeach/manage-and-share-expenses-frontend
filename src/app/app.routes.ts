import { Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { path: 'auth', loadComponent: () => import('./screens/auth-screen/auth-screen').then(m => m.AuthScreen) },

    {
        path: '', children: [
            { path: 'create-expense', loadComponent: () => import('./screens/create-invoice/create-invoice').then(m => m.CreateInvoice), canActivate: [AuthGuard] },

        ]
    },
];
