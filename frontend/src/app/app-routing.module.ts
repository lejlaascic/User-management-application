import { HomeComponent } from './pages/home/home.component';
import { SingupComponent } from './pages/singup/singup.component';
import { LoginComponent } from './pages/login/login.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDashboardComponent } from './pages/user-dashboard/user-dashboard.component';


const routes: Routes = [
  {path: '',redirectTo: 'login', pathMatch: 'full'},
  {path:'home',component: HomeComponent},
  {path:'login',component: LoginComponent},
  {path:'singup',component: SingupComponent},
  {path:'dashboard',component: UserDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
