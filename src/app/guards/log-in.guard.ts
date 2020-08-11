import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../service/login.service';

@Injectable({
  providedIn: 'root'
})
export class LogInGuard implements CanActivate {

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.loginService.isTokenExpired()) {
      return true
    } else {
      this.router.navigateByUrl("/home")
      return false;
    }
  }

}
