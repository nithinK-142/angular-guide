import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  // console.log('route', route.routeConfig?.path);
  // console.log('state', state.url);
  const loggedinUser = localStorage.getItem('loggedinUser');
  if (loggedinUser !== null) return true;
  else {
    router.navigateByUrl('login');
    return false;
  }
};
