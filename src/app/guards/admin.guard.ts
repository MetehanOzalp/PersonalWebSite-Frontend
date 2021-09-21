import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  token: any;
  roles: any[] = [];
  constructor(
    private jwtHelper: JwtHelperService,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.localStorageService.get('token')) {
      this.router.navigate(['/']);
      return false;
    }
    this.token = this.localStorageService.get('token');
    let decodedToken = this.jwtHelper.decodeToken(this.token);
    this.roles =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
    if (this.roles != undefined) {
      if (this.roles.indexOf('admin') != -1) {
        return true;
      }
      this.router.navigate(['/']);
      return false;
    } else {
      return false;
    }
  }
}
