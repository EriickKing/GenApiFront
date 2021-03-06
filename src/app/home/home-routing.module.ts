import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectComponent } from './project/project.component';
import { InformationComponent } from './project/information/information.component';
import { ModelsComponent } from './project/models/models.component';
import { NewmodelComponent } from './project/models/newmodel/newmodel.component';

const homeRoutes: Routes = [
  { path: "", component: LandingComponent },
  { path: "new", component: NewProjectComponent },
  {
    path: "apigen/:id", component: ProjectComponent, children: [
      {path: "", component: InformationComponent},
      {path: "models",component: ModelsComponent}
    ]
  },
  { path: "apigen/:id/models/create", component: NewmodelComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(homeRoutes)
  ],
  exports: [RouterModule]
})

export class HomeRoutingModule { }