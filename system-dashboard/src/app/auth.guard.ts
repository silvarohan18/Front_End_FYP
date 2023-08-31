import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
  constructor(private authService: AuthService) {}

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const auth = this.authService.isAuthenticated();
    if (auth) {
      return true;
    } else {
      return false;
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<AuthenticatedComponent> {
  constructor(private authService: AuthService) {}

  canDeactivate(
    component: AuthenticatedComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): boolean {
    const auth = this.authService.isAuthenticated();
    if (auth) {
      return false;
    } else {
      return true;
    }
  }
}
