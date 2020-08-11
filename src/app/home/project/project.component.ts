import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projectName;
  id = this.AR.snapshot.params["id"];
  constructor(
    private dataService: DataService,
    private AR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.dataService.GET("project/one/" + this.AR.snapshot.params["id"]).toPromise().then(data => {
      this.projectName = data["data"].titleProject;
    })
  }

}
