import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-navbars',
  templateUrl: './navbars.component.html',
  styleUrls: ['./navbars.component.scss']
})
export class NavbarsComponent implements OnInit {
  id = this.AR.snapshot.params["id"];
  constructor(
    private AR: ActivatedRoute,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }
  logout() {
    this.loginService.logout();
  }
}
