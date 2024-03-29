import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [

  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}, //si quiero que cambie a login
  {path:'**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
