import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent implements OnInit {
  dataProject;
  constructor(
    private dataService: DataService,
    private AR: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getProject(); 
  }

  getProject() {
    this.dataService.GET("project/one/" + this.AR.snapshot.params["id"]).toPromise().then(data => {
      this.dataProject = data["data"];
      console.log("InformationComponent -> getProject -> this.dataProject", this.dataProject)
    })
  }

}
