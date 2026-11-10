import {HttpErrorResponse, HttpInterceptorFn} from '@angular/common/http';
import {ErrorService} from '../services/error';
import {inject} from '@angular/core';
import {catchError, throwError} from 'rxjs';

// Handle HTTP errors for the whole app
export const errorInterceptor: HttpInterceptorFn  = (req, next) => {
  const errorService = inject(ErrorService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0){
        errorService.message.set('Network error. Please check your connection. ');
      }else if (error.status === 404){
        errorService.message.set('The requested data was not found');
      } else if (error.status >= 500){
        errorService.message.set('Server error. Please try again later.');
      }else{
        errorService.message.set('Could not load data.');
      }
      return  throwError(() => error);
  })
);
}
