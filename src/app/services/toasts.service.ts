import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Toast {
  id: number;
  title: string;
  message: string;
  type: 'success' | 'error' | 'warning';
  duration: number;
  fadeOut?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastsSubject = new BehaviorSubject<Toast[]>([]);
  public toasts$ = this.toastsSubject.asObservable();
  private counter = 0;

  showSuccess(title: string, message: string, duration: number = 5000) {
    this.addToast(title, message, 'success', duration);
  }

  showError(title: string, message: string, duration: number = 5000) {
    this.addToast(title, message, 'error', duration);
  }

  showWarning(title: string, message: string, duration: number = 5000) {
    this.addToast(title, message, 'warning', duration);
  }

  private addToast(title: string, message: string, type: 'success' | 'error' | 'warning', duration: number) {
    const toast: Toast = {
      id: ++this.counter,
      title,
      message,
      type,
      duration
    };
    const currentToasts = this.toastsSubject.value;
    this.toastsSubject.next([...currentToasts, toast]);

    setTimeout(() => {
      this.removeToast(toast.id);
    }, duration);
  }

  removeToast(id: number) {
    const currentToasts = this.toastsSubject.value;
    const toastIndex = currentToasts.findIndex(t => t.id === id);
    if (toastIndex !== -1) {
      const toast = currentToasts[toastIndex];
      toast.fadeOut = true;
      this.toastsSubject.next([...currentToasts]);
      setTimeout(() => {
        const updatedToasts = this.toastsSubject.value.filter(t => t.id !== id);
        this.toastsSubject.next(updatedToasts);
      }, 300);
    }
  }
}