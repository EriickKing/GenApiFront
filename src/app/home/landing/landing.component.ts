import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  dataProjects;
  constructor(
    private dataService: DataService,
    private authService: LoginService
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }


  getProjects() {
    this.dataService.POST("project/allbyuser", {idUser: this.authService.decoded()}).subscribe(data => {
      this.dataProjects = data["data"];
      console.log(data)
    }) 
  }

}
