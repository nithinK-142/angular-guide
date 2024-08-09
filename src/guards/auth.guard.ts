import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userAuthService = inject(UserAuthService);
  // console.log('route', route.routeConfig?.path);
  // console.log('state', state.url);
  const loggedinUser = localStorage.getItem('loggedinUser');
  if (loggedinUser !== null && userAuthService.isLoggedin) return true;
  else {
    router.navigateByUrl('login');
    return false;
  }
};
