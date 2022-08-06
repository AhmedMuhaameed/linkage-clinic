import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentsHomeComponent } from './appointments-home.component';
const routes: Routes = [
  {
    path: '',
    component: AppointmentsHomeComponent,
  },
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AppointmentsRoutingModule { }
