import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CvRedirectGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const lang = route.queryParamMap.get('lang') || 'de';
    this.router.navigate(['/'], {
      queryParams: { openCV: 'true', lang: lang },
    });
    return false;
  }
}
