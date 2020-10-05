import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { NewProjectComponent } from './new-project/new-project.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectComponent } from './project/project.component';
import { InformationComponent } from './project/information/information.component';
import { ModelsComponent } from './project/models/models.component';
import { NewmodelComponent } from './project/models/newmodel/newmodel.component';

@NgModule({
  declarations: [
    LandingComponent,
    NewProjectComponent,
    ProjectComponent,
    InformationComponent,
    ModelsComponent,
    NewmodelComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [

  ]
})
export class HomeModule { }