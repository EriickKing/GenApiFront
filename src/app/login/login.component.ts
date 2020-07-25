import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private dataService: DataService
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
    })
  }

  ngOnInit(): void {
  }

}
