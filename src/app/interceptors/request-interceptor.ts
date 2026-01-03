import { HttpInterceptorFn, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ToastService } from '../services/toasts.service';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);

  return next(req).pipe(
    tap({
      next: (event) => {
        if (event instanceof HttpResponse) {
          const status = event.status;
          if (status >= 200 && status <= 209) {
            // Success toast for 200-209
            const message = (event.body as any)?.message || 'Operation completed successfully';
            toastService.showSuccess('Success', message);
          }
        }
      },
      error: (error) => {
        if (error instanceof HttpErrorResponse) {
          const status = error.status;
          const message = error.error?.message || error.message || 'An error occurred';

          if (status >= 400 && status <= 409) {
            // Warning toast for 400-409
            toastService.showWarning('Warning', message);
          } else if (status >= 500) {
            // Error toast for 500+
            toastService.showError('Error', message);
          }
        }
      }
    })
  );
};
