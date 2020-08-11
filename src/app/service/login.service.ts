import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  helper = new JwtHelperService;
  constructor(
    private router: Router
  ) { }

  isTokenExpired() {
    return this.helper.isTokenExpired(localStorage.getItem("token"));
  }

  decoded(){
    return this.helper.decodeToken(localStorage.getItem("token"));
  }

  logout() {
    localStorage.setItem("token", "");
    this.router.navigateByUrl("/")
  }
}
