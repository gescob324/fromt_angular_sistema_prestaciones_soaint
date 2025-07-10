import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/service/auth.service';
import { catchError, throwError } from 'rxjs';

export const jwtInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  
  const token = authService.getToken();
  
  if (token && authService.isAuthenticated()) {
    const authReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          // Manejo específico de error 403
          console.error('Acceso prohibido: Permisos insuficientes');
          router.navigate(['/unauthorized']);
        }
        return throwError(() => error);
      })
    );
  }
  
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        console.error('Acceso prohibido: No autenticado');
        router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
};