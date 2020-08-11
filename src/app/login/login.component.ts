import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router,
    private loginService: LoginService
  ) {
    this.LoginForm();
  }

  LoginForm() {
    this.loginForm = new FormGroup({
      emailUser: new FormControl(null, {
        validators: [
          Validators.required,
          Validators.email
        ]
      }),
      passwordUser: new FormControl(null, {
        validators: [
          Validators.required
        ]
      })
    })
  }

  logIn() {
    this.dataService.POST("user/login", this.loginForm.value).subscribe(data => {
      console.log(data);
      localStorage.setItem("token", data["token"]);
      this.router.navigateByUrl('/home')
    }, error => {
      console.log(error.error)
    })
  }

  ngOnInit(): void {
    // document.documentElement.setAttribute('data-theme', localStorage.getItem("theme"));
  }

}
