import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.scss']
})
export class ModelsComponent implements OnInit {
  idProject;
  dataModels;
  constructor(
    private dataService: DataService,
    private AR: ActivatedRoute
  ) { 
    // console.log(this.id);
    this.AR.parent.params.subscribe(data => {
      this.idProject = data.id
      this.dataService.GET("model/" + this.idProject).subscribe(data => {
        this.dataModels = data["data"]
        console.log(this.dataModels);
      })
    })
  }

  ngOnInit(): void {

  }

}
