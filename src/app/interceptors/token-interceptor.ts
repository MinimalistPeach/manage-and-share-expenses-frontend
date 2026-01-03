import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith(environment.apiUrl)) {
    if (!req.url.includes('/auth/')) {
      const cookieService = inject(CookieService);
      const token = cookieService.get('token');
      if (token) {
        req = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}` // TODO: Cookie-ból kiszedés
          }
        });
      }
    }
  }

  return next(req);
};
