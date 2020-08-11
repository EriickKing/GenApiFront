import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    NavbarComponent,

  ],
  imports: [
    CommonModule,
    RouterModule
    
  ],
  exports: [
    NavbarComponent,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {}