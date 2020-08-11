import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  darkLight;
  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    // document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
  }

  // toggleDark() {
  //   if (localStorage.getItem("theme") === null) {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     localStorage.setItem("theme", "dark");
  //   } else if (localStorage.getItem("theme") === "dark") {
  //     document.documentElement.setAttribute('data-theme', 'light');
  //     localStorage.setItem("theme", "light");
  //   } else if (localStorage.getItem("theme") === "light") {
  //     document.documentElement.setAttribute('data-theme', 'dark');
  //     localStorage.setItem("theme", "dark");
  //   }
  // }

  logout() {
    this.loginService.logout();
  }

}
