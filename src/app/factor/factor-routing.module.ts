import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
  {path: 'login', component:LoginComponent},
  {path: 'register', component:RegisterComponent},
   
  {path:"security" ,loadChildren:()=>import('./modules/security/security.module').then(m=>m.SecurityModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactorRoutingModule { }
