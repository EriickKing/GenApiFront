import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LogInGuard } from './guards/log-in.guard';
import { LogoutGuard } from './guards/logout.guard';


const routes: Routes = [
  { path: "", component: LoginComponent, canActivate: [LogInGuard]},
  {path: "home", loadChildren: () => import("src/app/home/home.module").then(m => m.HomeModule), canActivate: [LogoutGuard]},
  { path: "**", component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
