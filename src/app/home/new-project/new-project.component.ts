import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/service/login.service';
import { DataService } from 'src/app/service/data.service';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  projectForm: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router,
    private loginService: LoginService
  ) { 
    this.form()
  }

  ngOnInit(): void {

  }

  form() {
    this.projectForm = new FormGroup({
      titleProject: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      descProject: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      idUser: new FormControl(this.loginService.decoded()._id, {
        validators: [
          Validators.required,
        ]
      }),
      dbUser: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      dbPassword: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      dbUrl: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      dbName: new FormControl(null, {
        validators: [
          Validators.required,
        ]
      }),
      date: new FormControl(new Date(Date.now()))
    })
  }


  newProject() {
    // console.log(this.projectForm.value);
    this.dataService.POST("project", this.projectForm.value).subscribe(data => {
      console.log(data);
      this.router.navigateByUrl("/home");
      this.projectForm.reset();
    })
  }



}
