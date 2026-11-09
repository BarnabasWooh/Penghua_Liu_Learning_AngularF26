// Track requests
import {HttpInterceptorFn} from '@angular/common/http';
import {inject} from '@angular/core';
import {LoadingService} from '../services/loading';
import {finalize} from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loadingService = inject(LoadingService);
  // Increase the count when a request starts.
  loadingService.start();
  return next(req).pipe(
    // Decrease the count when the request ends.
    finalize(() => loadingService.stop())
  );
};
