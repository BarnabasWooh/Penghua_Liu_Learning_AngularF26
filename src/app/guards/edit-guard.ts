import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { EditGuard } from '../services/edit-guard';

export const editGuard: CanActivateFn = (route, state) => {
  const guardService = inject(EditGuard);
  const router = inject(Router);

  return guardService.guardEnabled()
    ? router.parseUrl('/books')
    : true;
};
