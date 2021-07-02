import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../shared/shared.module';
import { FactorRoutingModule } from './factor-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
 


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FactorRoutingModule,
    SharedModule,
   
  ]
})
export class FactorModule { }
