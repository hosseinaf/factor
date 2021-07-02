import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path:"",component:DashboardComponent},
 
   
  {path:"security" ,loadChildren:()=>import('./modules/security/security.module').then(m=>m.SecurityModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactorRoutingModule { }
