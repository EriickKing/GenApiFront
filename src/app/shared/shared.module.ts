import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NavbarsComponent } from './navbars/navbars.component';


@NgModule({
  declarations: [
    NavbarComponent,
    NavbarsComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    NavbarComponent,
    NavbarsComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}